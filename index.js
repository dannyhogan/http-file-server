const server = require('./lib/app');

server.listen(7890, () => {
  console.log('Listening...')
});