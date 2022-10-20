const http = require('http');

const server = http.createServer(function(req, res){
    console.log(req.method);
    res.end();
});

const PORT = 5000;

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
});