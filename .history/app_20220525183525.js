//create server to listen on port 3000 
//install required library http to start server

const http = require("http") 
//tells server what port to listen too 
const prot = 3000 

//create server variable  and function 
const server = http.createServer(function(req, response) {
//every time some request a page on a server it will call this function 

})

//setup server to listen on prot 
server.listen(port, function(error) {
//once server starts listening it will call this function if there is an error 
if (error) {
    console.log("something is not right", error)
    
}
})