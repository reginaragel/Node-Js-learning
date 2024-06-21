const express=require('express');
const app=express()
const {products}=require('./data')


app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1><a href="/products">products</a>')
})

app.get('/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name}=product;
        return {id,name}
    })
    res.json(newProducts)
})
app.listen(5000,()=>{
    console.log('Server Listening on port 5000....');
})