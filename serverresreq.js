const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our first web page folks')
    }
    if(req.url==='/about'){
        res.end('here you can view the history')
    }
    res.end(`
    <h1>Oops!!!</h1>
    <p>we couln't find the page that you are requesting</p>
    <a href='/'> back Home</a>
    
    `)
    
})

server.listen(4500)