//create server to listen on port 3000 
//install required library http to start server
const http = require('http') 

//tells server what port to listen too 
const port = 3000 

//create server variable  and function 
const server = http.createServer(function(req, response) {

})

//setup server to listen on prot 
server.listen(port, function(error) {
//once server starts listening it will call this function if there is an error 
if (error) {
    console.log("something is not right", error)
} else {
    console.log("Server is listening perfectly on port  " + port)
}
})