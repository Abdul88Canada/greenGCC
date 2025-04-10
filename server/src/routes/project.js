import express from 'express';
const router = express.Router();
import {
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
    getAllProjects
} from '../controllers/projectController.js';

import authMiddleware from '../middleware/authMiddleware.js';

router.use(authMiddleware);

router.post('/', createProject);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/', getAllProjects);

export default router;
