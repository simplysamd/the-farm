//Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const path = require('path')
const PORT = 5000;
const request = require('request')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(path.resolve(__dirname, '../src/build')));
app.use(cors())

app.get('/test', function (req, res) {
  console.log('RQEUEST', req, 'RESPONSE', res)
  // https://swapi.dev/api/people/1/
  request('https://swapi.dev/api/people/1/', function(error, response, body) {
    res.send(response)
  })
})
//Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//
//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

//listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(PORT, function () {
  console.log(`Listening on PORT ${PORT}`);
});
