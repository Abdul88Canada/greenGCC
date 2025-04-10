import express from 'express';
const router = express.Router();
import {
    createDeveloper,
    getDeveloperById,
    updateDeveloper,
    deleteDeveloper,
    getAllDevelopers
} from '../controllers/developerController.js';

import authMiddleware from '../middleware/authMiddleware.js';

router.use(authMiddleware);

router.post('/', createDeveloper);
router.get('/:id', getDeveloperById);
router.put('/:id', updateDeveloper);
router.delete('/:id', deleteDeveloper);
router.get('/', getAllDevelopers);

export default router;
