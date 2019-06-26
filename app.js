const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Test');
  console.log('Request!')
});

module.exports = server;