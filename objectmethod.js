
//assign()

// let target = {};
// let source1 = { foo: "bar" };
// let source2 = { baz: 42 };
// let source3={name:'prakash'};
// let result = Object.assign(target, source1, source2,source3);

// console.log(result); // Output: { foo: 'bar', baz: 42 }


//create()


let person = {
  name: 'prakash',
  age: 25,
  city:"thane",
};

let employee = Object.create(person, {
  salary: { value: 50000 },
  position: { value: 'Software Developer' },
});

console.log(employee.name); //prakash
console.log(employee.age); // Output: 30
console.log(employee.city)
console.log(employee.salary); // Output: 50000
console.log(employee.position); // Output: 'Software Developer'



//defineProperties()

// let obj = {};

// Object.defineProperties(obj, {
//   prop1: {
//     value: 42,
//     writable: false,
//   },
//   prop2: {
//     value: 'Hello',
//     enumerable: true,
//   },
//   prop3: {
//     get() {
//       return this.prop1 + ' World!';
//     },
//     enumerable: true,
//   },
// });

// console.log(obj.prop1); // Output: 42
// obj.prop1 = 100; // Error: Cannot assign to read only property 'prop1'
// console.log(obj.prop2); // Output: 'Hello'
// console.log(obj.prop3); // Output: '42 World!'



//defineProperty()

// const obj = {};

// Object.defineProperty(obj, "name", {
//   value: "John",
//   writable: true,
//   enumerable: true,
// });

// console.log(obj.name); // Output: John

// // Trying to modify the property
// obj.name = "prakash";
// console.log(obj.name); // Output: John (not modified)


//entries()

// const fruits = ['apple', 'banana', 'cherry','prakash'];

// const iterator = fruits.entries();

// console.log(iterator.next().value); //0 .apply

// console.log(iterator.next().value);//1.banana



// const myMap = new Map();
// myMap.set('name', 'prakash');
// myMap.set('age', 25);
// myMap.set('city', 'ambernath');

// const iterator = myMap.entries();

// console.log(iterator.next().value); // Output: ['name', 'prakaash']
// console.log(iterator.next().value); // Output: ['age', 25]
// console.log(iterator.next().value); // Output: ['city', 'ambernath']



//freeze()

// const obj = {
//   name: 'Prakash',
//   details: {
//     age: 26,
//     city: 'Ambernath'
//   }
// };
// Object(obj)
// // Object.freeze(obj);
// Object.freeze(obj.details);


// obj.name = 'Singh'; // Attempt to modify a property
// obj.details.age = 2; // Attempt to modify a nested property

// console.log(obj.name); 
// console.log(obj.details.age); 
// console.log(obj.details.city);


//getOwnPropertyDescriptor()

// const obj = {
//   name: "Prakash",
//   age: 27,
// };

// const descriptor = Object.getOwnPropertyDescriptor(obj,"name","age");
// console.log(descriptor);


//getOwnPropertyDescriptors()

// const obj = {
//   name: "prakash",
//   age: 27,
// };
// const descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);


//getOwnPropertyNames()

// const obj = {
//   name: "John",
//   age: 30,
// };

// const propertyNames = Object.getOwnPropertyNames(obj).filter(
//   (name) => typeof obj[name] === "string"
// );
// console.log(propertyNames);

//getPrototypeof

// function Person() {}
// Person.prototype = {
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };

// const john = new Person();
// const prototype = Object.getPrototypeOf(john);

// console.log(prototype);


//hasOwnProperty

// const obj = {
//   name: 'prakash',
//   age: 27
// };

// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty("age")); // Output: true
// console.log(obj.hasOwnProperty('address')); // Output: false


// console.log(Object.is(5, 5)); // Output: true
// console.log(Object.is('foo', 'foo')); // Output: true
// console.log(Object.is(0, -0)); // Output: false
// console.log(Object.is(NaN, NaN)); // Output: true



//.isExtensible()

// const object1 = {};

// console.log(Object.isExtensible(object1));
// // Expected output: true

// Object.preventExtensions(object1);

// console.log(Object.isExtensible(object1));
// Expected output: false


// const obj = {
//   name: 'prakash',
//   age: 27
// };

// console.log(Object.isExtensible(obj)); // Output: true

// Object.preventExtensions(obj);

// console.log(Object.isExtensible(obj)); // Output: false



//isFrozen

// const obj = {
//   name: 'Prakash',
//   age: 27
// };

// console.log(Object.isFrozen(obj)); // Output: false

// Object.freeze(obj);

// console.log(Object.isFrozen(obj)); // Output: true


//isSealed

// const obj = {
//   name: 'prakash',
//   age: 27
// };

// console.log(Object.isSealed(obj)); // Output: false

// Object.seal(obj);

// console.log(Object.isSealed(obj)); // Output: true



//keys()

// const obj = {
//   name: "prakash",
//   age: 27,
// };

// const propertyNames = Object.keys(obj);

// console.log(propertyNames);


//preventExtensions

// const obj = {
//   name: 'John',
//   age: 30
// };

// console.log(Object.isExtensible(obj)); // Output: true

// Object.preventExtensions(obj);

// console.log(Object.isExtensible(obj)); // Output: false

// obj.address = '123 Main St'; // Trying to add a new property

// console.log(obj.address); // Output: undefined




//seal()

// const obj = {
//   name: 'Prakash',
//   age: 27
// };

// console.log(Object.isSealed(obj)); // Output: false

// Object.seal(obj);

// console.log(Object.isSealed(obj)); // Output: true

// // Trying to modify the properties
// obj.name = 'singh';

// console.log(obj.name); // Output: Jane (modified)
// console.log(obj.age); // Output: undefined (not deleted)


//setPrototypeOf()

// const parent = {
//   greet() {
//     console.log('Hello!');
//   }
// };

// const child = {};

// Object.setPrototypeOf(child, parent);

// child.greet(); // Output: Hello!


//value()

// const obj = {
//   name: "Prakash Singh",
//   age: 27,
// };

// const propertyValues = Object.values(obj);

// console.log(propertyValues);

