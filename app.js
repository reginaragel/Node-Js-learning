const express=require('express')
const app=express()
const logger=require('./logger')
const autherize=require('./autherize')



app.use([autherize,logger])   /// or another method is app.use('/api',logger) so that it can be applicable to all the page followed by /api
app.get('/',(req,res)=>{
    
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/v1/products',(req,res)=>{
    res.send('products')
})
app.get('/v1/items',(req,res)=>{
    console.log(req.user);
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('server listening on port 5000,.....');
})