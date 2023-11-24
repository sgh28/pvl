import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import Person from '../models/person.js'

// import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();

const secret = "ThisISsecret";
export const numOfUser = async(req,res)=>{
  const email = req.email;
  
  try {
    
    const person = await Person.findOne({email:email}); 
    if(!person) res.status(401).send(`Unauthorized: ${email}`);

    
    const numOfUser = await Person.countDocuments();    
    res.status(200).json({ numOfUser: numOfUser});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
}


export const signup = async (req, res) => {

  
    const { email, password, name, gender } = req.body;
    try {

      const oldUser = await Person.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await Person.create({ email, password: hashedPassword, name: name,gender:gender});
  
      const token = jwt.sign( { email: result.email, name: result.name,result,gender:result.gender }, secret, { expiresIn: "1h" } );
      
      res.status(201).json({ result, token });
    } catch (error) {

      res.status(500).json({ message: "Something went wrong",error });
      
    }
  };

  export const update = async(req,res)=>{
    const {email} = req.params;
    const name = req.body.name;
    
    try {
      
      if(email != req.email) res.status(404).send(`No person with email: ${email}`);
      
      const person = await Person.findOne({email:email}); 
      
      person.name = name;

      const newPerson = await Person.findByIdAndUpdate(person.id, person, { new: true });
      res.status(200).json(newPerson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    
  }

  export const signIn = async(req,res)=>{
    const { email, password } = req.body;
    
    try {
      const oldPerson = await Person.findOne({ email });
  
      if (!oldPerson) return res.status(404).json({ message: "Person doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldPerson.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign( { email: oldPerson.email, name: oldPerson.name,oldPerson,gender:oldPerson.gender }, secret, { expiresIn: "1h" } );
      
      res.status(200).json({ result: oldPerson, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  
  export const get_all_people = async(req,res)=>{
    const email = req.email;

    
    try {
      
      const person = await Person.findOne({email:email}); 
      if(!person) res.status(401).send(`Unauthorized: ${email}`);
  
      const people = await Person.find({});
      const modifiedPeopleData = people.map(person => ({
        name: person.name,
        email: person.email,
        gender: person.gender,
      }));
      
      console.log(modifiedPeopleData);
       
      res.status(200).json({ people: modifiedPeopleData});
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Something went wrong" });
    } 
  }
