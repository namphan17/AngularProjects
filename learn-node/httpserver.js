const http = require("http");
const fs = require("fs");

let server = http.createServer((request, response) => {
  let content = fs.createReadStream(process.argv[3]);
  // content.pipe(result);
  // let content = fs.readFileSync(process.argv[3],"utf8");
  response.writeHead(200, {'content-type': 'text/plain'});
  content.pipe(response)
});
server.listen(process.argv[2]);
