// server.js or app.js

const express = require('express');
const connectDB = require('./config/database'); // Import database configuration
const noteRoutes = require('./routes/noteRoutes'); // Import note routes
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require('dotenv').config();
// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require('./config/checkToken'));


// Start the server
const PORT = process.env.PORT || 3001;

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api', noteRoutes); // Use note routes with /api prefix


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
