import Unit from '../models/Unit.js';

export const createUnit = async (req, res) => {
    try {
        const newUnit = new Unit(req.body);
        const savedUnit = await newUnit.save();
        res.status(201).json(savedUnit);
    } catch (error) {
        console.error('Error creating unit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUnitById = async (req, res) => {
    try {
        const unit = await Unit.findById(req.params.id).populate(['project', 'currentOwner', 'originalOwner']);
        if (!unit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json(unit);
    } catch (error) {
        console.error('Error fetching unit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateUnit = async (req, res) => {
    try {
        const updatedUnit = await Unit.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedUnit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json(updatedUnit);
    } catch (error) {
        console.error('Error updating unit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteUnit = async (req, res) => {
    try {
        const deletedUnit = await Unit.findByIdAndDelete(req.params.id);
        if (!deletedUnit) return res.status(404).json({ message: 'Unit not found' });
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
        console.error('Error deleting unit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllUnits = async (req, res) => {
    try {
        const units = await Unit.find().populate(['project', 'currentOwner', 'originalOwner']);
        res.status(200).json(units);
    } catch (error) {
        console.error('Error fetching units:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
