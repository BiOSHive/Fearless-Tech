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
   //calling readfile function, to read the index.html time in the project, this function will also handle errors if any and read all data within that file 
    fs.readFile('index.html', function(error, data) { 
        //if statement to handle if there is an error 
        if (error) {
            res.writeHead(404) //status code 404 means not found 
            res.write('Page/File not found.') //text that will write to website 
        } else {
            res.write(data) // this will run if there is no error, it will display the data within the file 
        }
    })
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