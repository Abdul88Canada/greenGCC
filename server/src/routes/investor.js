import express from 'express';
const router = express.Router();
import {
    createInvestor,
    getInvestorById,
    updateInvestor,
    deleteInvestor,
    getAllInvestors
} from '../controllers/investorController.js';

import authMiddleware from '../middleware/authMiddleware.js';

router.use(authMiddleware);

router.post('/', createInvestor); // Create an investor
router.get('/:id', getInvestorById); // Get an investor by ID
router.put('/:id', updateInvestor); // Update an investor by ID
router.delete('/:id', deleteInvestor); // Delete an investor by ID
router.get('/', getAllInvestors); // Get all investors

export default router;
