const http = require("http");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/html");

const file2Send = fs.readFileSync(`${dirPath}/index.html`);
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(file2Send);
});

server.listen(3000, () => {
  console.log("Server working on port 3000");
});
