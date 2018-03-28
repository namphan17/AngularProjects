const url = require("url");
const http = require("http");

let server = http.createServer((req, res) => {
  let endpoint = url.parse(req.url, true);
  console.log("Get request from: " + JSON.stringify(endpoint));
  let route = endpoint["pathname"];
  res.writeHead(200, {'Content-Type': 'application/json'});

  if (route === "/api/parsetime") {
    console.log("Get a route");
    if(endpoint["query"]) {
      console.log("Had a normale query!");
      let myDate = new Date(endpoint["query"]["iso"]);
      res.end(JSON.stringify({"hour": myDate.getHours(), "minute": myDate.getMinutes(), "second": myDate.getSeconds()}));
    }
  } else if (route === "/api/unixtime") {
    if (endpoint["query"]) {
      let myDate = new Date(endpoint["query"]["iso"]);
      res.end(JSON.stringify({"unixtime": +myDate}));
    }
  }

});

server.listen(process.argv[2]);
