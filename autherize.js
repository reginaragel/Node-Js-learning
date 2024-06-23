const autherize=(req,res,next)=>{
    console.log('autherize');
    next()
}

module.exports=autherize