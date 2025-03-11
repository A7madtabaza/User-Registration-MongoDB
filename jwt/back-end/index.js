const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5174',  // السماح فقط بالطلبات من هذه الواجهة الأمامية
  credentials: true,               // السماح بإرسال الكوكيز مع الطلبات
};

app.use(cors(corsOptions));        // تطبيق إعدادات CORS

// الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Failed to connect to MongoDB:", err));

// إعداد المسارات
app.use("/api/users", userRoutes);

// تشغيل السيرفر
const PORT = 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
