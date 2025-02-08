// problem 1 : Write a function named checkDataType(value) that takes a single argument (value) and returns the type of the input data.
const b = [1,2,3,4]
const checkDataType = function(value){
    return typeof value
}
console.log(checkDataType(20)) 
console.log(checkDataType(checkDataType))   

// problem 2 : create a function to check the even number 

const val = 1989
function isEven(value){
    if (val % 2 == 0){
        return (true , " its even ")
    }
    else { 
        return (false , " its odd ")
    }
}
console.log(isEven(val))

console.log("problem 3 ")

// problem 3 : Write a function reverseString(str) that takes a string and returns its reverse.

const str = "bilal"
const str2 = str.split("")
const str3 = str2.reverse()
const str4 = str3.toString()
console.log(str4)



// const arr = [1,2,3,4,5]
// const rev = arr.reverse()
// const ver = rev.toString()
// console.log(rev)
// console.log(typeof ver )


// function reverseString(str) {
//     if (str =! String){
//         console.log("plz enter the string ")
//     }
//     else {
//         return str.split("").reverse().join('')
//     }
//     // const str1 = str.split("")
//     // const str2 = str1.reverse()
//     // const str3 = str2.toString()
//     // return str
    

// }
// console.log(reverseString("dsfsf"))