// what if we want to merge an array into another array then how will do it ..?
// by using spread operator and concat method 
// but spread operator is preferable 

const tens = new Array(10,20,30,40,50)
const tens2 = new Array(60,70,80,90,100)

// i am pushing just for checking how will it act 

// tens.push(tens2)
console.log(tens);
// its not good and desired output 
// we can use spread operator
const tens3 = [...tens , ...tens2]
console.log(tens3);

// we can also use concat method

const conct = tens.concat(tens2)
console.log(conct);

// consider we have an array in which there are more array to deal with this type of situation we use flat method 

const multiple_arr = [1,2,[3,4,5,],5,6,[7,[8,9],10]]
const flt = multiple_arr.flat(Infinity)
console.log(flt);
// Infinity will flat all the arrays inside the array

// console.log(Array.isArray(["bilal"]));
// console.log(Array.from(["bilal"]));
const frm1 = [1,2,3,4,5]
const frm = Array.from(["bilal"])
const merged = [...frm1, ...frm]
console.log(merged);
// const frm2 = frm1.push(frm)
// const merged = [...frm2 , frm1]
// console.log(merged);
// console.log(frm);
// console.log(frm1);
// console.log(frm2);
