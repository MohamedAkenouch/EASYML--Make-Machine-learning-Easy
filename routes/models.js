import express from 'express';

import { getModels, getModel, createModel, updateModel, deleteModel } from '../controllers/models.js';

const router = express.Router();

router.get('/', getModels);
router.post('/', createModel);
router.get('/:id', getModel);
router.patch('/:id', updateModel);
router.delete('/:id', deleteModel);

export default router;