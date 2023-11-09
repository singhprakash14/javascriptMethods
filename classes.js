

// let student = {
//     name: 'Prakash',
//     age: 25,
//     location: 'Ambernath',
//   };
  
//   let course = Object.create(student, {
//     subjects: { value: 'DSA' },
    
//   });
  
//   console.log(course.name); // Output: "Prakash"
//   console.log(course.age);  // Output: 25
//   console.log(course.location); // Output: "Ambernath"
//   console.log(course.subjects); // Output: "DSA"
  

// class Car {
//   constructor(make, model) {
//    this.make = make;
//    this.model = model;}
//   showInfo() {
//   console.log(`This is a ${this.make} ${this.model} car.`)}}
//   const myCar = new Car("Toyota", "Camry");myCar.showInfo();


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("John", "Doe");
const person1 = new Person("pp", "Doe");

console.log(person);
console.log(person1);



// Define an object representing a car
const car = {
  make: "Toyota",
  model: "Camry",
  showInfo: function() {
      console.log(`This is a ${this.make} ${this.model} car.`);
  }
};

// Call the showInfo method on the car object
car.showInfo(); // Output: "This is a Toyota Camry car."






// let student={
//   name:"prakash",
//   age:25,
//   location:"mumbai"
// }


// let course=Object.create(student,{
//   subjects:{value:"dsa"}

// })



// console.log(course)




// class Person {
//     constructor(name, age, city) {
//       this.name = name;
//       this.age = age;
//       this.city = city;
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name, age, city, salary, position) {
//       super(name, age, city);
//       this.salary = salary;
//       this.position = position;
//     }
//   }
  
//   const person = new Person('Prakash', 25, 'Thane');
//   const employee = new Employee('Prakash', 25, 'Thane', 50000, 'Software Developer');
  
//   console.log(employee.name); // Output: "Prakash"
//   console.log(employee.age); // Output: 25
//   console.log(employee.city); // Output: "Thane"
//   console.log(employee.salary); // Output: 50000
//   console.log(employee.position); // Output: "Software Developer"
  