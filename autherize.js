const autherize=(req,res,next)=>{

    const {user}=req.query
    if(user==='john'){
        req.user={name:'john',id:3}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
    console.log('autherize');
    next()
}

module.exports=autherize