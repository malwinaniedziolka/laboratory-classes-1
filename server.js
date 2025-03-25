const http = require("http");
const config = require('./config.js')
const routing = require('routing/routing.js')

const server = http.createServer((request, response) => {
    
// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.

// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
});

server.listen(config.PORT, () => {
    console.log("Server working on http://localhost:3000")
});


