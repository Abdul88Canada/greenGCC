import express from 'express';
const router = express.Router();
import {
    createUnit,
    getUnitById,
    updateUnit,
    deleteUnit,
    getAllUnits
} from '../controllers/unitController.js';

import authMiddleware from '../middleware/authMiddleware.js';

router.use(authMiddleware);

router.post('/', createUnit);
router.get('/:id', getUnitById);
router.put('/:id', updateUnit);
router.delete('/:id', deleteUnit);
router.get('/', getAllUnits);

export default router;
