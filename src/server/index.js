const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { message: "受け付けました" });
  res.end();
});

const port = 8080;
server.listen(port);
console.log("Server listen on port " + port);
