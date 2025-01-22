import mongoose from 'mongoose';

const DeveloperSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    organization: { type: String },
    country: { type: String },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }], // List of projects owned by the developer
    createdAt: { type: Date, default: Date.now }
});

const Developer = mongoose.model('Developer', DeveloperSchema);
export default Developer;