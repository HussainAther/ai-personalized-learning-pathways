const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/student-progress', (req, res) => {
    res.json({ progress: 75, recommendations: ["Review Basic Concepts"] });
});

app.listen(PORT, () => {
    console.log(`Dashboard server running on http://localhost:${PORT}`);
});

