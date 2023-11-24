import express from "express";
import { signIn,signup,numOfUser,update, get_all_people } from "../controllers/people.js";
import auth from '../middleware/index.js'
const router = express.Router();

router.get("/numOfUsers",auth,numOfUser);
router.post("/signup",signup);
router.post("/signin",signIn);
router.patch("/:email",auth,update);
router.get("/",auth,get_all_people);
export default router;