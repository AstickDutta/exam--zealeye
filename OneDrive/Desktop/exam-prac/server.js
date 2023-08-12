import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoute.js";
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use("/", productRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`node server running in ${PORT}`);
});
