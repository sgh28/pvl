import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
const secret = "ThisISsecret";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    

    let decodedData = jwt.verify(token, secret);
    req.email = decodedData?.email;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;