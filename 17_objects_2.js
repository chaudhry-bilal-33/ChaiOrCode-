const obj = {
    user : {
        name :{
            firstname : "bilal",
            secondname : "munir"
        },
        email : "bilalmunir@gmail.com",
    }

}
console.log(obj);
console.log(obj.user.name.firstname);

{
    const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//Yes, the spread operator (...) can be used as an alternative to Object.assign() to merge objects.
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4)
// why we use the empty object in the first argument of the Object.assign method
// because we want to merge the values of the object into the empty object
// the empty object will not have any values and it act as the target object and other are act as source object
console.log(obj5);



// extracting the keys and values of an object
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "bilal"
}
console.log(Object.keys(course));
console.log(Object.values(course));
// it will give the keys and values of the object in the form of array