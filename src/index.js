const http = require('http');
const db = require('../data/db');
require('dotenv').config()

async function requestHandler(req, res) {
    const todos = await db("todo");
    // res.json({ todos });
    res.write(JSON.stringify({ todos }));
    res.end();
}
const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));
