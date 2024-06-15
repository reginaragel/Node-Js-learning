const { error } = require('console');
const {readFile}=require('fs');
const { reject } = require('lodash');


const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{

            if (err){
                reject(err)
            }
            else{
               resolve(data)
            }
        })

    })
}
// getText('./context/first.txt')
// .then((result=>console.log(result)))
// .catch((err=>console.log(err)))


const start=async()=>{
    try {
        const first=await getText('./context/first.txt')
         console.log(first);
        
    } catch (err) {
        console.log(err);
        
    }
    
}
start()
