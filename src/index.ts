import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import authRoutes from './routes/auth';
import reviewRoutes from './routes/Review';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
