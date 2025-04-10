import Project from '../models/Project.js';

export const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('developer');
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('developer');
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
