import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import Person from "./Person";
import * as API from '../api/index'

import {useNavigate } from "react-router-dom";
import { get_all_people } from "../actions/people";
function People(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    
    useEffect(() =>{
      console.log("Fetching result");
      dispatch(get_all_people(navigate));
    },[])
    const {people} = useSelector(state =>{console.log(state.people); return state.people});
    console.log(people);
    return (
        <div>
          {people.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              email={person.email}
              gender={person.gender}
            />
          ))}
        </div>
      );
}

export const  loadPeople = async() => {


  const data = await API.get_all_people();
  console.log("In loadPeoples");
  console.log(data?.data?.people);
  return data?.data?.people;
}

export default People;