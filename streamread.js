const {writeFileSync}=require('fs');
for( let i=0;i<100000;i++){
    writeFileSync('./context/big.txt',`hello world ${i}\n`,{flag:'a'})
}



// const {createReadStream}=require('fs');

// const stream=createReadStream('./context/big.txt',{highWaterMark:90000,})

// stream.on('data',(result)=>{
//     console.log(result);
// })
// stream.on('error',(error)=>{
//     console.log(error);
// })