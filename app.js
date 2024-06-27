const express=require('express')
const app=express()

const {products}=require('./data')

app.use(express.static('./express-post'))
app.use(express.urlencoded({extended:false}))
app.get('/api/products',(req,res)=>{
    res.status(200).json({success:true,data:products})
})

app.post('/login',(req,res)=>{
   const {name}=req.body;
   if(name){
      return res.status(200).send(`Welcome ${name}`)
   }
    res.status(401).send('Pleasee Provide Credentials')
})


app.listen(5000,()=>{
    console.log('server listening on port 5000......');
})