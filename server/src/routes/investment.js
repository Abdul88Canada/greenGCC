import express from 'express';
const router = express.Router();
import {
    createInvestment,
    getInvestmentById,
    updateInvestment,
    deleteInvestment,
    getAllInvestments
} from '../controllers/investmentController.js';

import authMiddleware from '../middleware/authMiddleware.js';

router.use(authMiddleware);

router.post('/', createInvestment);
router.get('/:id', getInvestmentById);
router.put('/:id', updateInvestment);
router.delete('/:id', deleteInvestment);
router.get('/', getAllInvestments);

export default router;
