const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();

const app = express();
const PORT = process.env.port || 8080;

app.use(async (req, res, next) => {
  try {
    await db.raw("SELECT 1");
    console.log("Database connected succesfully");
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).send("Database connection failed");
  }
});

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.listen(PORT, () => {
  console.log(`App is running on port:${PORT}`);
});
