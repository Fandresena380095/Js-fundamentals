// OOP in ES5
// You can construct a object with a constructor function
//Constructor Function
//Also use the constructor for dates with d = new Date(d)

function Person (firstName ,lastName ,birthDay) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(birthDay);

    // some methods within the object 
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    };

    this.getBirthYear = function(){
        return this.birthDay.getFullYear();
    };
};

// Make an instance of the object
const Bob = new Person("Bob", "Doe", "2000-08-03");
const John = new Person("John", "K", "2000-09-12");

// console.log(Bob.birthDay);
// console.log(Bob.getFullName());
// console.log(John.getBirthYear());




//If you do not want your method to be seen in the constructor
//You need to use "prototype" to the method of the object
//Another object with prototype
function Car(brand,year,km) {
    this.brand = brand;
    this.year = new Date(year);
    this.km = km;
};

//methods outside of the object constructor
Car.prototype.LaunchingYear = function() {
    return this.year.getFullYear();
};

const BMW = new Car("BMw","1990-09-04",23000)


//now see the differernces
// console.log(BMW)
// console.log(Bob)



//_____________________________________________________
//OOP in ES6 (prettier version of ES5)
//use it instead of the ES5 stuff

class Dog {
    constructor(name, race ,birthDate){
        this.name = name;
        this.race = race;
        this.birthDate = new Date(birthDate);
    };
    getBirthYear = () => this.birthDate.getFullYear();

    getInfo = () =>
`His name is ${this.name},
he is a ${this.race},
and he was born in ${this.birthDate.getFullYear()}.`
};

const Max = new Dog("Max","Rott","2003-07-09");

// console.log(Max.getBirthYear());
// console.log(Max.getInfo());





