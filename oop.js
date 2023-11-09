//object

const person={
    name:"prakash",
    age:25,
    location:"ambernath"

}

console.log(person.age)

const person2={
    name:"prakash",
    age:25,
    location:"ambernath",
    printlocation:function(){
        return this.name  
    }

}

console.log(person2.printlocation())


const person3={
    name:"prakash",
    age:25,
    location:"ambernath"

}

console.log(person3.age)







class car{
    constructor(brand,model,year){
this.brand=brand
this.model=model
this.year=year
    }
}
printcardata=function(){
return this.model
}
let cardata1= new car("tata","hexa",2019)
let cardata2= new car("tata","safari",2021)
let cardata3= new car("tata","tigo",2019)

console.log(cardata1)
console.log(cardata2)
console.log(cardata3)

