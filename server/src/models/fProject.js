import mongoose from 'mongoose';

const fProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    developer: { type: mongoose.Schema.Types.ObjectId, ref: "Developer", required: true },
    fundingNeeded: { type: Number, required: true },
    fundingRemaining: { type: Number, required: true },
    fundingType: { type: String, enum: ["Loan", "Equity"], required: true },
    carbonCreditsGenerated: { type: Number, required: true }, // Estimated credits per year
    location: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Renewable Energy, Afforestation
    totalUnits: { type: Number, required: true }, // Total number of units
    pricePerUnit: { type: Number, required: true }, // Price of each unit
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["Pending", "Active", "Completed"], default: "Pending" }
});

const fProject = mongoose.model('fProject', fProjectSchema);
export default fProject;