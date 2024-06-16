const EventEmitter=require('events');

const customEmitter=new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`Data Received user ${name} with Id:${id}`);
})
customEmitter.on('response',()=>{
    console.log(`Some Logic can be done here`);
})
customEmitter.emit('response','john',56)