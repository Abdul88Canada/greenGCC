import mongoose from 'mongoose';

const UnitSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true }, // Associated project
    currentOwner: { type: mongoose.Schema.Types.ObjectId, ref: "Investor" }, // Current investor owning the unit
    originalOwner: { type: mongoose.Schema.Types.ObjectId, ref: "Investor", required: true }, // First buyer
    price: { type: Number, required: true }, // Original price of the unit
    resalePrice: { type: Number }, // Price if resold
    status: { type: String, enum: ["Available", "Sold", "Resold"], default: "Sold" },
    transactionHistory: [
        {
            seller: { type: mongoose.Schema.Types.ObjectId, ref: "Investor" },
            buyer: { type: mongoose.Schema.Types.ObjectId, ref: "Investor" },
            price: Number,
            date: { type: Date, default: Date.now }
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

const Unit = mongoose.model('Unit', UnitSchema);
export default Unit;