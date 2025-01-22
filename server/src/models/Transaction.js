import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "Investor", required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Investor" }, // Optional for resale
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    unit: { type: mongoose.Schema.Types.ObjectId, ref: "Unit", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["CreditCard", "BankTransfer"] },
    status: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;