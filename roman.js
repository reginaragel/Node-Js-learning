

const map = new Map();
map.set('X',10)
map.set('I',1)

var total =0 ;
var userInput='X'

for(let i= 0 ;i<userInput.length; i++){

   total = total+ map.get(userInput[i]);

}

console.log(total);

