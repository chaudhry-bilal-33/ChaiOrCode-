const myArr = new Array(1,2,3,4,5);
console.log(typeof myArr);
console.log(myArr);
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.shift()
// shift will delete the value from the start 
console.log(myArr);
myArr.unshift(22)
// unshift will add the value at the start of the array 
console.log(myArr);
console.log(myArr.includes(2));
// includes check if the 2 is in the array or not and it returns boolean type 
console.log(myArr.indexOf(2))

console.log(typeof myArr);
const newArr = myArr.join()
// the join() will convert the array into string as well as its data type 
console.log(myArr.join());
console.log(typeof newArr);

// slice and splice method

const arr = new Array(1,2,3,4,5);
const slice = arr.slice(1,3)
console.log(slice);
console.log(arr);
// slice will not change the original array it will just return the sliced array
const splice = arr.splice(1,3)
console.log(splice);
console.log(arr);
// splice will change the original array and will return the sliced array