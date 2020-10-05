//Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const path = require('path')
const PORT = 5000;
const request = require('request')
const express = require('express')
const cors = require('cors')
const secretKeyDontTell = require('./secretthing')

const app = express()

app.use(express.static(path.resolve(__dirname, '../src/build')));
app.use(cors())

app.get('/characterSearch', function (req, res) {
  const name = req.query.name
  request(
    {
      method: 'get',
      url: `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/3/${name}/`,
      headers: {
        'X-API-Key': secretKeyDontTell.myKey
      }
    },
    function(error, response, body) {
      res.send(response)
    }
  )
})

app.get('/charactersForId', function(req, res) {
  const id = req.query.id
  request(
    {
      method: 'get',
      url: `https://www.bungie.net/Platform/Destiny2/3/Profile/${id}/?components=100,200,1100`,
      headers: {
        'X-API-Key': secretKeyDontTell.myKey
      }
    },
    function(error, response, body) {
      res.send(response)
    }
  )
})

app.get('/characterById', function (req, res) {
  const id = req.query.id
  request(
    {
      method: 'get',
      url: `https://www.bungie.net/Platform/User/GetMembershipsById/905770/3/`,
      headers: {
        'X-API-Key': secretKeyDontTell.myKey
      }
    },
    function(error, response, body) {
      console.log(response)
      res.send(response)
    }
  )
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
