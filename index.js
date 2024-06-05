const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connect
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("NH Quiz DB Connected Successfully!".bgGreen);
  })
  .catch((err) => {
    console.error("Error connecting to the database".bgRed, err);
  });

app.listen(PORT, () => {
  console.log(`NH Quiz Server is running on port ${PORT}`.bgMagenta);
});
