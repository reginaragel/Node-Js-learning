console.log('Start');



setTimeout(function() {

console.log('Timeout');

}, 0);



Promise.resolve('Promise').then(function(str) {

console.log(str);

});



console.log('End');