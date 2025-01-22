import mongoose from 'mongoose';
import  Promotion from '../models/Promotion.js';

// Generate a random code
const generateCode = (length = 8) =>
    Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)]).join('');

// Insert 100 unique promotion codes
const insertPromotionCodes = async () => {
    const codes = new Set();
    while (codes.size < 100) codes.add(generateCode());

    try {
        await Promotion.insertMany(Array.from(codes).map(code => ({ code, used: false })));
        console.log('100 unique promotion codes inserted');
    } catch (err) {
        console.error('Error inserting promotion codes:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Connect to MongoDB
mongoose.connect('mongodb+srv://User:12qw@cluster0.qbmrcts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connected');
        insertPromotionCodes();
    })
    .catch(err => console.log('Error connecting to MongoDB:', err));






