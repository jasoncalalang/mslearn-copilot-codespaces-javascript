const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


// Serve static files from 'public' directory
app.use(express.static("public"));
app.use(express.json());

// GET endpoint for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Express API server!");
});

// POST endpoint to accept JSON payload
app.post("/api/data", (req, res) => {
  const payload = req.body;
  // You can process the payload here
  res.json({ message: "Payload received", data: payload });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
