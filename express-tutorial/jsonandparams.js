const express=require('express');
const app=express()
const {products}=require('./data');
const { find } = require('lodash');


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
app.get('/products/:productID',(req,res)=>{
    // console.log(req);
    // console.log(req.params);
    const {productID}=req.params;
   const singleProduct=products.find((products)=>products.id===Number(productID))
   if(!singleProduct){
    return res.status(404).send('Product does not exist')
   }
    return res.json(singleProduct)
})
app.get('/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello World')
})
app.get('/products/v1/query',(req,res)=>{
    // console.log(req.query);
    const {search,limit}=req.query;
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
    res.send('Hello World')
})
app.listen(5000,()=>{
    console.log('Server Listening on port 5000....');
})