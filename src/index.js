const http = require('http');
require('dotenv').config()

function requestHandler(req, res) {
    res.write(process.env.WORD);
    res.end();
}
const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));
