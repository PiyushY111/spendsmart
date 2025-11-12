import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "../DB/Database.js";
import transactionRoutes from "../Routers/Transactions.js";
import userRoutes from "../Routers/userRouter.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ FinManager Server is running and connected to MongoDB!");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy" });
});

// Connect to MongoDB once for serverless
let isConnected = false;

const handler = async (req, res) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
};

export default handler;
