import express from 'express';

import { getExperts, getExpert, createExpert, updateExpert, deleteExpert } from '../controllers/experts.js';

const router = express.Router();

router.get('/', getExperts);
router.post('/', createExpert);
router.get('/:id', getExpert);
router.patch('/:id', updateExpert);
router.delete('/:id', deleteExpert);

export default router;