// You normally use the browser dev tool 
// to test your js scripts
//the console. method is very useful to work with the console


// V   A   R   I   A   B   L   E   S
// var ,let ,const 
// var = globaly scoped
// let = mutable ,only available in the block
// const = immutable ,only available in the block
// only use const unless you know you're giong to reassign the value



//D A T A    T Y P E S 
//strings - numbers - null - booleans - undefined
const name = "John";
const age = 98;
const rating = 4.87;
const isCool = true ;
const x = null ; 
const y = undefined;
//or 
let z;
// search for the type with typeof
console.log(typeof z);





//                  S--T--I--N--G--S
// C O N  C A T E N A T I O N
const Name = "Joshua"
const Age = "19"

console.log("My name is "+Name+" and I am "+Age);
console.log(`My name is ${Name} and I am ${Age}`);

//M E T H O D S
const s = "Hello World!"
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5)); //like the Python slicing methods
console.log(s.substring(0,5).toUpperCase());

const b = "Car ,Supercar , Bikes, Superbikes";
//split the strings to arrays
let g = b.split(',')
console.log(g); 





//                      A-R-R-A-Y-S (Python= List)
// declaration
const num = new Array(1,2,3,4,5,6,false);
const chif = [7,8,9,10,11,12, 'banana'];
console.log(num ,chif);

// assigning and getting access
chif[7] = "apple"; //push is better if you don't know the lenght of the array
console.log(chif[7]);

// push vs pop (adding to the end/delete the end)
chif.push("Mangoes");
chif.push("Avocado");
chif.pop();
console.log(chif);

// add to the beginning
chif.unshift("Strawberries");
console.log(chif);

//verifying if something is an array
console.log(Array.isArray(chif));

//indexing
console.log(chif.indexOf(12));





//  OBJECT LITERALS (python = Dictionary)
const person = {
    firstName : 'John',
    lastName: "Doe",
    age: 23,
    hobbies: ["music","movies","sports"],
    address: {
        street: "50 main str",
        city: "Boston",
        state: 'MA'
    }
}

//access to the values
console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(`some parameters : ${person.address.city}, ${person.address.street}`);

//destructuring 
const {address} = person;
const {firstName} = person ;
const {address: {city}} = person;

console.log(address.street);
console.log(firstName);
console.log(city);

//add properties
person.email = 'JohnDoe@gmail.com';
console.log(person.email);

//most of the time , you will deal with arrays
const todos = [
    {
        id: 1 ,
        task: "Take out trash", 
        isCompleted : true
    },
    {
        id: 2 ,
        task: "metting with boss", 
        isCompleted : true
    },
    {
        id: 3 ,
        task: "Dentist appt", 
        isCompleted : false
    }
];

console.log(todos[1].task);
console.log(todos[0].isCompleted);

/*
-Json is a data format used within full stack dev 
-You usually send it in Json format /API stuffs
-Json uses a lot of the code above 
-Json is used for data transfer  
*/

// in order for you to transcribe into JSON ,use:
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);






// L   O   O   P   S   
//FOR : for(fist state; condition ; iterations) {
//    what to do;
//}
console.log("All the numbers *2")
for (let i = 0; i <= 5; i++) {
    console.log(`Number ${i}: ${i*2}`);
}; 


//WHILE
let i = 0;
while(i<=3) {
    console.log(`While loop numbers ${i}`);
    i++;
};

// ITTERATE THROUGH ARRAYS
//traditional
for (let x=0 ; x< todos.length ; x++) {
    console.log(todos[x]);
};

//or 
for (let x of todos) {
    console.log(x);
    console.log(x.id);
    console.log(x.task);
    console.log(x.isCompleted);
};





//high order array methods in mixed arrays/dictionary

//forEach , map , filter
//for each is just iterative(like let...of)
todos.forEach(function(item){
    console.log(item.task);
});

//map &filter will return an array
//map itterates through the data and creates a new array modified by a function
const tasksToDo = todos.map(function(item){
    return item.task;
});
console.log(tasksToDo);

//filter itterates through the data and use a function as a filter to create a new array
const finished = todos.filter(function(item){
    return item.isCompleted === true;
});
console.log(finished); 

// having fun ? Try :
const finishedTasks = todos.filter(function(x){
    return x.isCompleted === true;
}).map(function(y){
    return y.task;
});
console.log(finishedTasks); //This will only output the completed tasks





//  C O N D I T I O N A L S

// or: || / and: && / not: &
// == is for checking value
// === is for checking value and type

//  IF
const az = '10';

if (az == 10) {
    console.log("az is 10");
};

//if / else if / else
const argo = '23';

if (argo === 23) {
    console.log("value = 23 , type = number")
} else if(argo == 23) {
    console.log("value 23, type != number")
} else {
    console.log("value != 23 ,type != number")
};


// ternary operator 
// (variable) = (condition) ? (if true) : (if false);
const powerLevel = 11;

const levelStatus = powerLevel >= 10 ? 'level up' : 'same level';
const hairColor = powerLevel >= 10 ? 'blue' : 'yellow';

console.log(hairColor);
console.log(levelStatus);

// SWITCH
/*
switch(variable){
    case (case 1):
        (what to do);
        break ;
    case (case 2):
        (what to do);
        break;
    case (case 3):
        (what to do);
        break;
    default:
        (none of them);
        break;
}
*/
switch(hairColor){
    case 'yellow':
        console.log("He is still a normal ss");
        break;
    case 'blue' :
        console.log("He is a ss God");
        break;
    default :
        console.log("He is not a ss yet");
        break;
}


const day = 3;
switch(day) {
    case  1:
        console.log("Monday");
        break;
    case  2:
        console.log("Tuesday");
        break;

    case  3:
        console.log("Wednesday");
        break;
    case  4:
        console.log("Thirsday");
        break;
    case  5:
        console.log("Friday");
        break;

    case  6:
        console.log("Saturday");
        break;
    case  7:
        console.log("Sunday");
        break;
    default :
        console.log("I don't know");
        break;
};





// F U N C T I O N S

function addNums(num1 ,num2) {
    return num1+num2;
};
console.log(addNums(3,8));



//do the same with ARROw function
// const (function name) = (parameters) => {(function)};
const addNumsArrow = (num1,num2) => {
    return num1 + num2;
};
console.log(addNumsArrow(3,9));


// simplier (one liner), you do not even need to return
const multilpy = (xa ,ya) => xa*ya ;
console.log(multilpy(2,3));


const luckyNumber = hjk => `The lucky number is ${hjk}`;
console.log(luckyNumber(9));

//even replace how to write a forEach/map/filter function
const jokes = ["batman jokes", "joker jokes","spiderman jokes"]
jokes.forEach((superheroJokes) => console.log(superheroJokes));
/* same as :
jokes.forEach(function(superheroJokes){
    console.log(superheroJokes);
});
*/





















































