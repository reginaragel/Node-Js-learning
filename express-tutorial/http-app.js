

const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
app.all('*',(req,res)=>{
    res.status(404).send('Page not Found')
})
app.listen(5000,()=>{
    console.log('server is listening in port 5000....');
})


////get-->read
///put -->update

//post-->insert
//delete-->delete