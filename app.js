const express=require('express')
const app=express()

const {products}=require('./data')

app.use(express.static('./express-post'))
app.use(express.urlencoded({extended:false}))

app.use(express.json())


app.get('/api/products',(req,res)=>{
    res.status(200).json({success:true,data:products})
})

app.post('/api/products',(req,res)=>{
    const {name}=req.body
    if(!name){
       return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/loginpage',(req,res)=>{
   const {name}=req.body;
   if(name){
      return res.status(200).send(`Welcome ${name} to the world of node`)
   }
    res.status(401).send('Pleasee Provide Credentials')
})


app.get('/nameDetails', (req, res) =>{

    let names = {"name": "pushpu", "age" :21};
    return  res.status(200).send(names);
    
})

app.listen(5000,()=>{
    console.log('server listening on port 5000......');
})