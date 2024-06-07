const {readFile}=require('fs')

console.log("starting new task");

readFile('./context/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log("completed first task");

})
console.log("Starting the next task");
