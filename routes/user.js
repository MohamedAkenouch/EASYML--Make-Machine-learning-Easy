import express from "express";
const router = express.Router();

import { signin, signup, createUser, deleteUser,getUsers  } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.get('/', getUsers);


export default router;