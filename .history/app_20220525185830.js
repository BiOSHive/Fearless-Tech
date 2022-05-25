//create server to listen on port 3000 
//install required library http to start server
const http = require('http') 
const fs = require('fs') //importing another library to use for file handling 

//tells server what port to listen too 
const port = 3000 

//create server variable  and function 
//every time some request a page on a server it will call this function 
//tell the browser you will write html 
const server = http.createServer(function(req, res) {
    res.write(200, { 'Content-type': 'text/html'}) //status code 200 is a good status code according to goodle, content-type is the key, text/html is the dictionary that says parse as html
    fs.readFile('index.html', function(error, data) {
        
    })
    
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