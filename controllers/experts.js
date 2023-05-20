import express from 'express';
import mongoose from 'mongoose';

import ExpertData from '../models/expertData.js';

const router = express.Router();

export const getExperts = async (req, res) => { 
    try {
        const ExpertDatas = await ExpertData.find();
                
        res.status(200).json(ExpertDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getExpert = async (req, res) => { 
    const { id } = req.params;

    try {
        const Expert = await ExpertData.findById(id);
        
        res.status(200).json(Expert);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createExpert = async (req, res) => {
    const { name, description, selectedFile, idUser} = req.body;

    const newExpert = new ExpertData({ name, description, selectedFile,idUser })

    try {
        await newExpert.save();

        res.status(201).json(newExpert);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateExpert = async (req, res) => {
    const { id } = req.params;
    const { name, description, selectedFile, idUser } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expert with id: ${id}`);

    const updatedExpert = { name, description, selectedFile,idUser, _id: id };

    await ExpertData.findByIdAndUpdate(id, updatedExpert, { new: true });

    res.json(updatedExpert);
}

export const deleteExpert = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No expert with id: ${id}`);

    await ExpertData.findByIdAndRemove(id);

    res.json({ message: "expert deleted successfully." });
}




export default router;