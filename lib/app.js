const { createServer } = require('http');
const fs = require('fs');
const { parse } = require('url');

const server = createServer((req, res) => {
  const pathname = parse(req.url).pathname;
  console.log(`Requested ${pathname}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

    fs.readFile(`./public${pathname}`, { encoding: 'utf8' }, (err, content) => {
      if(!content) {
        res.statusCode = 404;
        res.end(`404: ${pathname} not found.`)
      } else {
        res.end(content);
      }
    });
});

module.exports = server;