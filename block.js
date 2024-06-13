const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end('HOME PAGE')
    }
    //blocking code
    
    if(req.url=='/about page'){
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('About page')
    }
    res.end('Error Page')
})

server.listen(5000)
console.log('Server Listening in the port 5000');