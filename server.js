const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/git-webhook', (req, res) => {
    console.log('Webhook received!');
    exec('cd /path/where/you/want/hello-world && git pull', (error, stdout, stderr) => {
        if (error) {
            console.error(`Git Pull Error: ${error.message}`);
            return res.status(500).send('Git pull failed');
        }
        console.log(`Git Pull Output: ${stdout}`);
        res.status(200).send('Repository Updated');
    });
});

app.listen(3000, () => {
    console.log('Webhook server running on port 3000');
});

// CW5GI26R57BRATC3P2RQY7EWIUOJYUXK
