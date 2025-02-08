const name = new String("bilal");
const name2 = 'munir';
console.log(name2.toUpperCase());
console.log(name);
const age = new Number(20)
age2 = 21

console.log(age2);
console.log(age);
console.log(typeof name )

// what is the change when we give it the object declaration and the simple declaration 
// answer : when we declare something like "const age = new Number(20)" it is object declaration of the given data type. it will return the object and we can access the prototype of number and if we do it in simple way it will return the same data type as we declared earlier and cannot access the prototype of the given data type.

// key value pair 
console.log(name[0]);
console.log(age[1]);

// how does the  number with object declaration work ....? 
// answer : it will return the object and we can access the prototype of number 
// why there is no key value pair ....?
// answer : because it is not an object it is a number and we cannot access the prototype of number
// does only object has prototype options and why ....?

const fase = new Boolean(true)
console.log(typeof fase);
console.log(fase);
// what is difference when we put the bracket at the end of the function like we do in toUpperCase function and what if we don't write it in the function...?
// answer : when we put the bracket it will execute that function and if we do not put the bracket it will simply give the function name in the terminal 
console.log(name.length);
// console.log(name.toUpperCase());
console.log(name);

// define this line "const str = name.toUpperCase"
// answer : it will convert the name into uppercase and store it in the str variable
const str = name.toUpperCase()
console.log(str);
