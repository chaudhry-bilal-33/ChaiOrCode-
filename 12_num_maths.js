const num = new Number(20.3)
console.log(num.toFixed(2).l);
console.log(typeof num);
console.log(num.toString().length);
// we convert the number into string and then we get the length of the string
console.log(num.toPrecision(2));
const precise = num.toPrecision(2)
console.log(typeof precise);
const fix = num.toFixed(2)
console.log(typeof fix);
// some of the prototype returns string and some returns number 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-PK'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
const random = Math.random() ;
console.log(Math.floor(random));
const addition = random + 10
console.log(addition);
const maath = new Math()
console.log(maath.toString());