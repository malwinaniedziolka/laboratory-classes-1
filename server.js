// 📦 Musisz zaimportować tutaj moduł 'http'.
const http = require("http");
const config = require('./config.js')

// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
const server = http.createServer((request, response) => {

});

server.listen(config.PORT, () => {
    console.log("Server working on http://localhost:3000")
});

// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.

// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.

// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.

// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);
