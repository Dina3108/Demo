// Import express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user data (for testing)
const users = [
  {
    rollNo: "24cs056",
    password: "010156",
    redirectPage: "Homepage_Student.html",
  },
  {
    rollNo: "sh128",
    password: "270628",
    redirectPage: "Homepage_Admin.html",
  },
];
// API endpoint for login
app.post("/login", (req, res) => {
  const { rollNo, password } = req.body;

  // Find user
  const user = users.find(
    (u) => u.rollNo === rollNo && u.password === password
  );

  if (user) {
    res.status(200).json({
      message: "Login successful!",
      redirectPage: user.redirectPage,
    });
  } else {
    res.status(401).json({ message: "Invalid roll number or password." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
