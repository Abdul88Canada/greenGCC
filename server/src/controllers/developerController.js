import Developer from '../models/Developer.js';

export const createDeveloper = async (req, res) => {
    try {
        const newDeveloper = new Developer(req.body);
        const savedDeveloper = await newDeveloper.save();
        res.status(201).json(savedDeveloper);
    } catch (error) {
        console.error('Error creating developer:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getDeveloperById = async (req, res) => {
    try {
        const developer = await Developer.findById(req.params.id).populate('projects');
        if (!developer) return res.status(404).json({ message: 'Developer not found' });
        res.status(200).json(developer);
    } catch (error) {
        console.error('Error fetching developer:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateDeveloper = async (req, res) => {
    try {
        const updatedDeveloper = await Developer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedDeveloper) return res.status(404).json({ message: 'Developer not found' });
        res.status(200).json(updatedDeveloper);
    } catch (error) {
        console.error('Error updating developer:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteDeveloper = async (req, res) => {
    try {
        const deletedDeveloper = await Developer.findByIdAndDelete(req.params.id);
        if (!deletedDeveloper) return res.status(404).json({ message: 'Developer not found' });
        res.status(200).json({ message: 'Developer deleted successfully' });
    } catch (error) {
        console.error('Error deleting developer:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllDevelopers = async (req, res) => {
    try {
        const developers = await Developer.find().populate('projects');
        res.status(200).json(developers);
    } catch (error) {
        console.error('Error fetching developers:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
