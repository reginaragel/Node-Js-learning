const http=require('http')
const {readFileSync, read}=require('fs')


const homepage=readFileSync('./index.html')
const server=http.createServer((req,res)=>{

    if(req.url==='/homepage'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()

    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
         res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})
server.listen(5000)