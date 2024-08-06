const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const PORT = process.env.port || 8080;

dotenv.config();

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`App is running on port:${PORT}`);
});
