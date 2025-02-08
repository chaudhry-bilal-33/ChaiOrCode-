const JSuser = {
    "full name" : "Bilal Munir",
    age : 18,
    location : "Karachi",
    email : "bilalmunir@gmail.com",
}

console.log(JSuser["full name"]);
// console.log(JSuser.full name); // this will give error because of space in key
console.log(JSuser);

// declaring the symbol into the key of the object then access it 
const a1 = Symbol('abc');
const b1 = Symbol('bc');

const obj = {
    [a1] : 'Hello',
    [b1] : 'World',
}
// console.log(typeof a1);
console.log(obj[a1]);

// change the value 
JSuser.email = "bilalmunir88"
console.log(JSuser);

// add new key and value
JSuser["phone"] = "123456789";
console.log(JSuser);

// freeze the object so that no one can change the value
Object.freeze(JSuser);

// delete the key and value
delete JSuser.age;
console.log(JSuser);

// check the key is present or not
console.log("location" in JSuser);
console.log("age" in JSuser);


// it will give the values from the object juser and print it
console.log(`my name is ${JSuser["full name"]} ${JSuser.location}`);

// this keyword 