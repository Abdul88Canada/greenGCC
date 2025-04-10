import express  from "express";
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

import apiKeysRoutes from './routes/apiKeysRoutes.js';
import sectorRoutes from './routes/sectorRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import emissionCalculationsRoutes from './routes/emissionCalculationsRoutes.js';
import protfolioRoutes from './routes/protfolioRoutes.js';
import mailRoutes from './routes/mailRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import orderRouters from './routes/ordersRoutes.js';
import adminRouters from './routes/adminRoutes.js';
import paymentInfoRoutes from './routes/paymentInfoRoutes.js';
import subaccountRoutes from './routes/subaccountsRoutes.js';

const app = express();
app.use(express.json()); 
const corsOptions = {
  origin: ['null', process.env.FRONTEND_SERVER, 'https://x-moyasar-form-version.com'], // Array of allowed origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Authorization, Content-Type, x-moyasar-form-version', 
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.use('/api/apikeys', apiKeysRoutes); 
app.use('/api/sectors', sectorRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/user', userRoutes);
app.use('/api/emissions', emissionCalculationsRoutes);
app.use('/api/portfolio', protfolioRoutes);
app.use('/api/mail', mailRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/order', orderRouters);
app.use('/api/subaccount', subaccountRoutes);
app.use('/api/admin', adminRouters);
app.use('/api/payment-info', paymentInfoRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));