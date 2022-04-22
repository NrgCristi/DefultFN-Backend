const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('backend.js')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'backend/html'});
    res.end(fileContent)
})

server.listen(8000, '127.0.0.1', () => {
    console.log('DefultFN Backend Started Listening On Port 8000')
})