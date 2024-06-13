const {readFile,writeFile}=require('fs')

readFile('./context/first.txt','utf-8',(err,result)=>{

    if(err){
        console.log(err);
        return
    }
    console.log(result);
    const first=result;
    readFile('./context/first.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(result);
        const second=result;
        writeFile('./context/result-async.txt',`hello there ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;

            }
            console.log(result);
        })
        

    })

})
