// rest operator 
//The rest operator (...) in JavaScript is used to collect multiple arguments into a single array or to group the remaining elements of an array or object. It allows functions or variables to handle an indefinite number of arguments or properties concisely.
function restOp(...numbers){ // like we have to set multiple values we use ...numbers
    return numbers
}
console.log(restOp(123,12122,44,4343,"bilal")); // rest operator will extract all these values in the form of array 

function restOp2(val1 , val2 , ...numbers ){
    return numbers // it will give me the values of numbers only and not the values of val1 and val2 
}
console.log(restOp2(200,300,400,5000,600)); // output : 400,5000,600

// use objects in functions 

const myObj = {
    name : "bilal",
    age : 20 
}
function myObjFunc(objectName){
    return `your name is ${objectName.name} and age is ${objectName.age}`
}
console.log(myObjFunc(myObj));


// use array in functions 
const sampleArray = [1,2,3,4,5,6,7]

function arrayFunc(arrayName){
    return `index one is ${arrayName[1]} and two is ${arrayName[2]}`
}
console.log(arrayFunc(sampleArray));