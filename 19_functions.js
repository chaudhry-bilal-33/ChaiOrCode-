//A function is a reusable block of code designed to perform a specific task when invoked. It takes inputs (called parameters), processes them, and optionally returns an output. Functions help organize code, reduce redundancy, and improve readability

function printName(name1 , name2 ){
    return name1 + name2
}
const name = printName("bilal ",2)
console.log(name);

// in greetings function we use the if conditional and it will give the value if the name is not written in the functions arguments and we use return to not go further if the condition is true 
function greetings(name){
    if(!name){         // ! means not equal 
        console.log("enter your name");
        return // not go further execution if conditional is true 
    }
    result = `welcome mister ${name}`
    return result 
}
console.log(greetings("bilal"));
console.log(greetings(""));