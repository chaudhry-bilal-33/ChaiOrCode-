{
    let one = 1
    // var two = 2
    const three = 3
}

// console.log(one) // ReferenceError: one is not defined;

// console.log(two) // ReferenceError: two is not defined;
// console.log(three) // ReferenceError: three is not defined;

function test() {
    let one = 4
    var two = 5
    const six = 6
    console.log(one) // 4;
    console.log(two) // 5;
    console.log(six) // 6;
    function test2() {
        let one = 7
        var two = 8
        
        console.log(one) // 7;
        console.log(two) // 8;
        console.log(six) // 9;
    }
    test2()
}
test()


var x = 10;
if (true) {
    var x = 20;  // Same 'x' variable is updated
}
console.log(x);  // 20

let y = 10;
if (true) {
    let y = 20;  // 'y' is a different variable inside this block
}
console.log(y);  // 10

