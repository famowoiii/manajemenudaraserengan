// Import semua modul yang diperlukan
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./router/admin.js";
import dataRouter from "./router/data.js";
import { Sequelize } from "sequelize";
import cookieParser from "cookie-parser";

// Inisialisasi aplikasi express
const app = express();

// Gunakan middleware untuk parsing body dari request
app.use(bodyParser());
app.use(cors());
app.use(cookieParser());
dotenv.config();

// Router untuk rute admin dan data
app.use("/api/admin", adminRouter);
app.use("/api/data", dataRouter);

// Error middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Inisialisasi server HTTP

// Tangani koneksi socket

// Jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
