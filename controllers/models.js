import express from 'express';
import mongoose from 'mongoose';

import ModelData from '../models/modelData.js';

const Modelrouter = express.Router();

export const getModels = async (req, res) => { 
    try {
        const modelDatas = await ModelData.find();
                
        res.status(200).json(modelDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getModel = async (req, res) => { 
    const { id } = req.params;

    try {
        const Model = await ModelData.findById(id);
        
        res.status(200).json(Model);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createModel = async (req, res) => {
    const { name,owner,type, description, selectedFile,permission} = req.body;

    const newModel = new ModelData({ name,owner,type, description,selectedFile,permission })

    try {
        await newModel.save();

        res.status(201).json(newModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateModel = async (req, res) => {
    const { id } = req.params;
    const { name,owner,type, description,selectedFile,permission} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No model with id: ${id}`);

    const updatedModel = { name,owner,type, description,selectedFile,permission, _id: id };

    await ModelData.findByIdAndUpdate(id, updatedModel, { new: true });

    res.json(updatedModel);
}

export const deleteModel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No model with id: ${id}`);

    await ModelData.findByIdAndRemove(id);

    res.json({ message: "model deleted successfully." });
}




export default Modelrouter;