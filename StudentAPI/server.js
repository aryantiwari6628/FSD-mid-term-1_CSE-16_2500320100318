const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Student records
let students = [];

// Server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});