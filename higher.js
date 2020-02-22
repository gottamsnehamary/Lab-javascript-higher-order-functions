//function1 Array slice
const foods = [pizza, burger, fingerChips, donuts, springRoll];
let modifiedfoods = foods.slice(1, 3);
console.log(modifiedfoods);

//function2 Array Splice
const foods = [pizza, burger, fingerChips, donuts, springRoll];
foods.splice(3, 0, "coffee", "burger");
console.log(foods);

//function 3 Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let even = numberArray.filter(function (num) {
    return num % 2 == 0;
});
console.log(even);

//function 4 reject 
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let notp = [];

function notprime(numberArray) {
    for (var i = 0; i < numberArray.length; i++) {
        var item = numberArray[i];
        var count = 0;
        for (var j = 2; j <= item / 2; j++) {
            if (item % j == 0)
                count++;

        }
        if (count != 0)
            notp.push(item);
    }
}
notprime(numberArray);

//function 5 lambda
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let iseven;
for (var i = 0; i < numberArray.length; i++) {
    var n = numberArray[i];
    iseven = n => {
        return n % 2 == 0
    }

}


//function 6 map
const myArray = [11, 34, 20, 5, 53, 16];
var squarednum = myArray.map(function (item) {
    return item * item;
});
console.log(squarednum);

// function 7 Reduce
const myArray = [11, 34, 20, 5, 53, 16];
var squarednum = myArray.map(function (item) {
    return item * item;
});
console.log(squarednum);
let sum = squarednum.reduce(function (initial, item) {
    return initial + item;
});
console.log(sum);​
// compressed code
let summed = myArray.map(function (item) {
    return item * item
}).reduce(function (initial, item) {
    initial + item;
}, 0);