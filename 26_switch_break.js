// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const name = "bilal" 
const age = 20 
const isStudent = true

switch (name){
    case "bislal" :
    console.log("i am bilal")
    // break   // break will break the condition if the condition is true if its false then cursor moves to the next case 
    case "bislal":
        console.log(`age is ${age}`)
       break // if we dont write the break it will execute all the case until the case has arrived with break  and avoid the default 
    case "bislal" :
        console.log("he is a student")
        break
    case "bislal":
        console.log("bilal is bilal")
        break
    default :
        console.log("default") // default will execute only when all conditions are false  
        // break // if we dont write the break on default and the default is true then it will execute itself and the cases until there is case with break
    case "bilaal":
        console.log("bilal is defaulter")
        // break
    case "sdfa":
        console.log(":")
}