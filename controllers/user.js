import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'
import mongoose from 'mongoose';

export const signin = async (req, res)=> {
    const {email , password} = req.body;
    try {
        const existingUser = await User.findOne({email});console.log(existingUser)
        if(!existingUser) return res.status(404).json({message:"user doesn't exist."})
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);  console.log(isPasswordCorrect);
        if (!isPasswordCorrect) return res.status(400).json({message:'Password incorrect'})
        const token = jwt.sign({email:existingUser.email , id :existingUser._id}, "test" ,{expiresIn :"1h"} ) ;
        res.status(200).json({result:existingUser , token})
    } catch (error) {
        res.status(500).json({message:"something went wrong"});
    }
}

export const signup = async (req, res) => {
    const {email , password , fname , lname} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message : "user already exist "})
        const hashedPassword = await bcrypt.hash(password , 12);
        const result = await User.create({email , password:hashedPassword , name : `${fname} ${lname}`} )
        const token = jwt.sign({email:result.email ,id: result._id }, "test" ,{expiresIn :"1h"} ) ;
        res.status(200).json({result, token})

    } catch (error) {
        
        res.status(500).json({message:"something went wrong"});

    }
    
}
export const createUser = async (req, res) => {
    const { name,email,password, id} = req.body;
    const hashedPassword = await bcrypt.hash(password , 12);
    console.log(hashedPassword)
    const newUser = new User({name,email,password:hashedPassword, id })

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getUsers = async (req, res) => { 
    try {
        const UserDatas = await User.find();
                
        res.status(200).json(UserDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expert with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "expert deleted successfully." });
}
