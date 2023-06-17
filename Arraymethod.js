
//concat

// let str1 = "Hello";
// let str2 = "World";
// let concatenatedString = str1.concat(", ", str2);
// console.log(concatenatedString); // Output: "Hello, World"

//every

// let numbers = [2, 4, 7, 8, 10];
// let allEven = numbers.every(function(element) {
//   return element % 2 === 0;
// });
// console.log(allEven); // Output: false


//filter()

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(function(element) {
//   return element % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4, 6]

//find()

// let numbers = [1, 2, 3, 4, 5, 6];
// let firstEvenNumber = numbers.find((element) => element % 2 === 0);
// console.log(firstEvenNumber);


//findIndex

// let numbers = [1, 2, 3, 4, 5, 6];
// let firstEvenIndex = numbers.findIndex(element => element % 2 === 0);
// console.log(firstEvenIndex); // Output: 1

//foreach

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (el) {
//   console.log(el);
// });


//includes

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana")); // Output: true
// console.log(fruits.includes("grape")); // Output: false

//indexOf,lastindexOf

// let numbers = [1, 2, 3, 4, 5, 2];
// console.log(numbers.indexOf(3)); 
// console.log(numbers.lastIndexOf(2))


//join

// let fruits = ["apple", "banana", "orange"];
// let result = fruits.join(", ");
// console.log(result);

//map()

// let numbers = [2, 4, 6, 8, 10];
// let squaredNumbers = numbers.map(function(element) {
//   return element * element;
// });
// console.log(squaredNumbers); // Output: [4,16,36,64,100]


//pop()

// let fruits = ["apple", "banana", "orange"];
// let lastFruit = fruits.pop();
// console.log(lastFruit); // Output: "orange"
// console.log(fruits); // Output: ["apple", "banana"]

//shift()

// let numbers = [1, 2, 3, 4, 5];
// let firstNumber = numbers.shift();
// console.log(firstNumber); // Output: 1
// console.log(numbers); // Output: [2, 3, 4, 5]


//push 

// let number =[1,2,3,4,5]
// let fnumber=number.push(1)
// console.log(number);


//reduce

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });
// console.log(sum); // Output: 15



//reduceRight

// let numbers = [1, 2, 3, 4, 5];
// let concatenated = numbers.reduceRight(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, "Initial Value: ");
// console.log(concatenated); // Output: "Initial Value: 54321"


//slice reverse


// let fruits = ["apple", "banana", "orange"];
// let reversedFruits = fruits.slice().reverse();
// console.log(reversedFruits); // Output: ["orange", "banana", "apple"]
// console.log(fruits); // Output: ["apple", "banana", "orange"]


//slice
// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// let slicedFruits = fruits.slice(1);
// console.log(slicedFruits);


//some()

// let numbers = [1, 2, 3, 4, 5];
// let hasEvenNumber = numbers.some(function(element) {
//   return element % 5 === 0;
// });
// console.log(hasEvenNumber); // Output: true


//sort()

// let numbers = [5, 2, 8, 1, 9];
// numbers.sort(function(a, b) {
//   return b - a;
// });
// console.log(numbers); // Output: [9, 8, 5, 2, 1]


//splice()

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2, 2);
// console.log(numbers); // Output: [1, 2, 5]

//toString()

let fruits = ["apple", "banana", "orange"];
let fruitsString = fruits.toString();
console.log(fruitsString);

//unshift()

let numbers = [2, 3, 4];
numbers.unshift(0, 1);
console.log(numbers);

