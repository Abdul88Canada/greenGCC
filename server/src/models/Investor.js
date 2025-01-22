import mongoose from 'mongoose';

const InvestorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    organization: { type: String },
    country: { type: String },
    fundsAvailable: { type: Number, default: 0 }, // Funds available for investments
    totalInvested: { type: Number, default: 0 }, // Tracks the total amount invested
    createdAt: { type: Date, default: Date.now }
});

const Investor = mongoose.model('Investor', InvestorSchema);
export default Investor;