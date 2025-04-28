
// // CW5GI26R57BRATC3P2RQY7EWIUOJYUXK





const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
app.use(express.json());

// 👉 GET request: show Hello World
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 👉 POST request: GitHub Webhook receiver
app.post('/git-webhook', (req, res) => {
    console.log('Webhook received!');

    // 🔥 Correct local path to your project folder
    const localRepoPath = 'C:/Users/bittu/OneDrive/Desktop/NODE JS/PRACTICE/Git Pratic/GitHub Repo';

    exec(`cd "${localRepoPath}" && git pull`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Git Pull Error: ${error.message}`);
            return res.status(500).send('Git pull failed');
        }
        console.log(`Git Pull Output: ${stdout}`);
        res.status(200).send('Repository Updated');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Webhook server running on port 3000');
});

// testing message in hello world
