
const {readFile, writeFile}=require('fs').promises;
// const util=require('util');
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try {
        const first=await readFile('./context/first.txt','utf8')
        const second=await readFile('./context/second.txt','utf8')
        await writeFile('./context/result-mind-grenade',`Lets merge: ${first} , ${second}`)
         console.log(first,second);
        
    } catch (err) {
        console.log(err);
        
    }
    
}
start()

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{

//             if (err){
//                 reject(err)
//             }
//             else{
//                resolve(data)
//             }
//         })

//     })
// }
// getText('./context/first.txt')
// .then((result=>console.log(result)))
// .catch((err=>console.log(err)))


