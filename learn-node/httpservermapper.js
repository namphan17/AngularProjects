const map  = require("through2-map");
const http = require("http");

let server = http.createServer((req, res) => {
  if (req.method !=== 'POST') {
    res.end("Send me a POST\n");
  }
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(process.argv[2]);
