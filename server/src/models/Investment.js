import mongoose from 'mongoose';

const InvestmentSchema = new mongoose.Schema({
    investor: { type: mongoose.Schema.Types.ObjectId, ref: "Investor", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    unitsPurchased: [{ type: mongoose.Schema.Types.ObjectId, ref: "Unit" }], // List of purchased units
    totalAmount: { type: Number, required: true }, // Total investment amount
    createdAt: { type: Date, default: Date.now }
});

const Investment = mongoose.model('Investment', InvestmentSchema);
export default Investment;