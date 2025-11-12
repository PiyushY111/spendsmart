import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

// Load environment variables
dotenv.config();

const app = express();
// const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

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

// // Start server
// app.listen(port, () => {
//   console.log(`🚀 Server is listening on http://localhost:${port}`);
// });

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
