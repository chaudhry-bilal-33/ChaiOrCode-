// this keyword is used to refer the object in which it is used and it gives the current context of the object

const myObj = {
    name : "bilal",
    age : 20,
    myFunc : function(){
        console.log(`my name is ${this.name} and age is ${this.age}`);
    }
}
// we can use only name without using this but it will create problem when we change something in the object and it will not update the value of the name\

myObj.myFunc(); // output : my name is bilal and age is 20
// we use this keyword to refer the object in which it is used and it gives the current context of the object
// if we use the name without this keyword and we change the name of the object then it will not update the value of the name in the function

myObj.name = "bilal munir";
myObj.myFunc(); // output : my name is bilal munir and age is 20

console.log(this);
// it will give the window object because we are using this keyword in the global scope

function myFunc2(){
    const name = "bilal";
    console.log(this.name);
}
myFunc2();


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "bilal "})


console.log(addTwo(3, 4))
