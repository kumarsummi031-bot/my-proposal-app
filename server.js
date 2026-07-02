const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (CSS, JS, Videos) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route to serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running beautifully at http://localhost:${PORT}`);
});