const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Simple in-memory counter
let counter = 0;

// API routes
app.get("/counter", (req, res) => {
  res.json({ counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.json({ counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.json({ counter });
});

app.post("/counter/reset", (req, res) => {
  counter = 0;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
