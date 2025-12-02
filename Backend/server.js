import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
// Routes Imports
import authRoutes from './routes/auth.js';
import earningRoutes from './routes/earnings.js';
import expenseRoutes from './routes/expenses.js';
import goalRoutes from './routes/goals.js';
import investmentRoutes from './routes/investments.js';
import recurringRoutes from './routes/recurring.js';
import savingsRoutes from './routes/savings.js';

dotenv.config();
connectDB();

const app = express();

// CORS Configuration - Allow all origins for development, specific origins for production
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Allow localhost and your frontend domains
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173', // Vite default
      'http://localhost:4173', // Vite preview
      'https://capstone2-km5z.onrender.com',
      process.env.FRONTEND_URL // Add your frontend URL to env
    ].filter(Boolean); // Remove undefined values
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // For development, allow all origins
      if (process.env.NODE_ENV === 'development') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true, // Allow cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // For legacy browser support
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/earnings', earningRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/recurring', recurringRoutes);
app.use('/api/savings', savingsRoutes);


app.get('/', (req, res) => {
  res.json({ 
    message: 'FinBuddy Backend is Running',
    status: 'success',
    cors: 'enabled',
    origin: req.get('Origin') || 'no-origin'
  });
});

// CORS test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'CORS test successful', 
    origin: req.get('Origin') || 'no-origin',
    timestamp: new Date().toISOString()
  });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
