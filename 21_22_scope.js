let a = 100
const b = 200

// if (a === 100){
//     let a = 300
//     console.log(a);
//     console.log(b);
// }

var c = 100
const d = 200

if (c === 100){
    var c = 300
    console.log(c);
    console.log(d);
}


// parent can not access child scope while child can access parent scope
function parent (){
    const name = "bilal"
    function child(){
        console.log(name);
    }
    child()
}
parent()

// if condition 
if (true){
    const firstname = "bilal"
    if(firstname === "bilal"){
        const lastname = "munir"
        console.log(firstname + " " + lastname);
    }
}
// the scope of if work as the scope level of the function
