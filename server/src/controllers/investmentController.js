import Investment from '../models/Investment.js';

export const createInvestment = async (req, res) => {
    try {
        const newInvestment = new Investment(req.body);
        const savedInvestment = await newInvestment.save();
        res.status(201).json(savedInvestment);
    } catch (error) {
        console.error('Error creating investment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getInvestmentById = async (req, res) => {
    try {
        const investment = await Investment.findById(req.params.id).populate(['investor', 'project', 'unitsPurchased']);
        if (!investment) return res.status(404).json({ message: 'Investment not found' });
        res.status(200).json(investment);
    } catch (error) {
        console.error('Error fetching investment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const updateInvestment = async (req, res) => {
    try {
        const updatedInvestment = await Investment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedInvestment) return res.status(404).json({ message: 'Investment not found' });
        res.status(200).json(updatedInvestment);
    } catch (error) {
        console.error('Error updating investment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteInvestment = async (req, res) => {
    try {
        const deletedInvestment = await Investment.findByIdAndDelete(req.params.id);
        if (!deletedInvestment) return res.status(404).json({ message: 'Investment not found' });
        res.status(200).json({ message: 'Investment deleted successfully' });
    } catch (error) {
        console.error('Error deleting investment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllInvestments = async (req, res) => {
    try {
        const investments = await Investment.find().populate(['investor', 'project', 'unitsPurchased']);
        res.status(200).json(investments);
    } catch (error) {
        console.error('Error fetching investments:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
