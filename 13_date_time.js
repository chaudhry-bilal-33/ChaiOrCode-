// Date is a constructor for working with date and time objects.
// Math is a static object that provides mathematical functions and constants but cannot be instantiated.

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).\

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// month starts from 0 so 0 is january and 11 is december
// and 5 , 3 are hours and minutes
let myCreatedDate3 = new Date("2023-01-14")
// date format is year-month-day
let myCreatedDate4 = new Date("01-14-2023")
// date format is month-day-year
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toTimeString());

let myTimeStamp = Date.now()
// 
console.log(Math.floor(myTimeStamp / 1000));
// to get the time in seconds we divide it by 1000 
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());
// month starts from 0 so 0 is january and 11 is december
console.log(newDate.getMonth() + 1);
// to get the current month we add 1 to the month
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getTimezoneOffset());       


