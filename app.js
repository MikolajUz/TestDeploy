// Import the http module
const http = require("http");

// Create a server that sends a "Hello World" response
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set status code to 200 (OK)
  res.setHeader("Content-Type", "text/plain"); // Set response type
  res.end("Hello World\n"); // Send response
});

// Define the port to listen on
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
