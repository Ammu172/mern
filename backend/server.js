const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const employees = [
  { id: 1, name: "Ravi", role: "Developer" },
  { id: 2, name: "Anjali", role: "Tester" },
  { id: 3, name: "Kiran", role: "DevOps" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Employees API
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Run on all interfaces
app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});
