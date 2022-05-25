//create server to listen on port 3000 
//install required library http to start server
const http = require('http') 

//tells server what port to listen too 
const port = 3000 

//create server variable  and function 
//every time some request a page on a server it will call this function 
//tell the browser you will write html to
const server = http.createServer(function(req, res) {
    res.write("Welcome to Project Purple Cow")
    res.end()
})

//setup server to listen on port 
//once server starts listening it will call this function if there is an error 
server.listen(port, function(error) {
if (error) {
    console.log("something is not right", error)
} else {
    console.log("Server is listening perfectly on port  " + port)
}
})