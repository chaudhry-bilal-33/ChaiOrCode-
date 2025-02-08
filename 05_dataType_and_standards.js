"use strict" ; // Use ECMAScript 5 strict mode in browsers that support it
// use ecmascript for the latest version of javascript
// use strict mode for the latest version of javascript

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

 /* In JavaScript, null is not an object; it is a primitive value that represents the intentional absence of any object value. However, there is a historical reason why typeof null returns "object", which often confuses developers.

Key Points about null:
Primitive Value: null is one of JavaScript's primitive types (others include undefined, string, number, boolean, etc.).
Purpose: It signifies the absence of a value or a reference to any object. It explicitly means "nothing" or "no value."
Type Check Issue: Due to a bug in the early implementation of JavaScript, typeof null returns "object". This behavior was never corrected for backward compatibility.
Example:
javascript*/
let value = null;
console.log(typeof value);  // Output: "object" (a historical bug)
console.log(value === null);  // Output: true
/*
Difference Between null and undefined:
null: Represents the intentional absence of a value. You often assign null to a variable to signify it is empty.
undefined: Represents a variable that has been declared but not yet assigned a value.
Example Use Case:
javascript

let user = null;  // No user is logged in
console.log(user);  // Output: null
*/
