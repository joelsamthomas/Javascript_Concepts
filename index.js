// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// a variable declared as var has scope completly inside the function which it is defined
const firstFunction = () => {
  for (var i = 0; i < 5; i++) {
    console.log('i', i);
  }
  console.log('i outside', i);
};
firstFunction();

//let solves the above prblem..it makes the scope vraibale only in the scope
const secondFunction = () => {
  for (let i = 0; i < 5; i++) {
    console.log('i', i);
  }
  // console.log('i outside', i);  // gets i is not defined
};
secondFunction();

//var-> function
//let->block
//const->block
const constvar = 1;
// constvar = 2;
/*
Error in /~/index.js (28:10)
Assignment to constant variable.
*/

//two ways of defining a method in an Object walk() and talk()
const person = {
  name: 'Joel',
  walk: function () {},
  talk() {},
};
person.walk();
person.talk();

console.log('***** Checkpoint 1 ******');

// this keyword
// this returns a reference to a current object
const person2 = {
  name: 'Joel',
  walk() {
    console.log('this', this);
  },
};
person2.walk();

const referencetowalkfunction = person2.walk; // note we are not calling using person2.walk();

console.log('***** Checkpoint 2 ******');
console.log('referencetowalkfunction', referencetowalkfunction);

console.log('***** Checkpoint 3 ******');
referencetowalkfunction(); // this is undefined(strict mode is not turned on).. value if a fucntion define by how it is called

// when this is called on an object it will be called on the address but when this is called stand alone // without an object reference it the scope of this becomes global objtec which is a window object. In the above case it was undefined cos the strict mode was turned on.

// How to solve by bidinf walk walk to person

console.log('***** Checkpoint 4 ******');
const bindedreferencetowalkfunction = person2.walk.bind(person);
console.log('bindedreferencetowalkfunction', bindedreferencetowalkfunction);
// see bound and this not returning undefined

console.log('***** arrow function checkpoint 5 ******');
// an arrow between function name and {}

const someArrowfn = () => {
  //afn is short form for arow function
};

console.log('***** Hoisting variables checkpoint 5 ******');

console.log('counter1', counter1); // output is undefined.. only for var and it erros for const and let
var counter1 = 1;
/*This doesn’t cause an error because the JavaScript engine moves the variable declaration to the top of the script.*/
//Example 2:
var counter2;
console.log('counter2', counter2); // output is undefined
counter2 = 1;

console.log('***** Hoisting functions checkpoint 5 ******');
// functional declartion are moved up the script . Mind you it doresnt work with arrow fucntions
hoistinfn1('tiger');

function hoistinfn1(animal) {
  console.log('animal is', animal);
}

// doesnt work calling because hositing  doesnt work with arrow functions. This will cause compilation error and not let hoisting to happen
const hoistinfn = (animal) => {
  console.log('animal is', animal);
};

//how to define array
console.log('***** Arrays Checkpoint 6 ******');
let somearray = [1, 2, 3, 4];
const cars = ['Saab', 'Volvo', 'BMW'];
cars[0] = 'Opel';

let somearray2 = new Array();
somearray2 = [1, 2, 3, 4, 5, 6, 7];
console.log('somearray2', somearray2);

//Function vs Anonymous function vs arrow function

console.log(
  '***** Function vs Anonymous function vs arrow function checkpoint 7 ******'
);

function regularFunction() {
  console.log('This is a regular function');
}

const arrowFunction = (param) => {
  console.log('This is a arrow function');
  return param;
};

/*
//met
first = (second) => {
  ;
};
//anfn
(first) => {
  second;
};

//nfn
const first = (second) => {
  third;
}; 
*/

let valtoStoreAnonymourFn = (param) => {
  console.log('This is a anonymous function');
  return param;
};

console.log('***** Memoization in Javascript checkpoint 8 ******');
// if same number is passed it return the same output like pure functions, we can cache the return values
function sampleFunction7(num) {
  return num + 100;
}

const memoizedFunction = (num) => {
  let cache = {};

  if (num in cache) {
    console.log('Number from Cache');
    return function (num) {
      let val;
      val = num + 256;
      cache.num = val;
      return val;
    };
  } else {
    console.log('Uncached value');
    let val = num + 256;
    cache[num] = val;
    return val;
  }
};

console.log('***** Closures in Javascript checkpoint 9 ******');

const stopwatch = () => {
  let startTime = Date.now();
  console.log('startTime :', startTime);

  for (let i = 0, len = 5000000; i < len; i++) {
    var someval = i * 356789;
  }

  return () => {
    let timer;
    console.log('startTime :', startTime);
    timer = Date.now() - startTime;
    console.log('timer :', timer);
  };
};

let getTimer = stopwatch();
getTimer(); // the startTime value is preserved to be reused in the function returned call

console.log('***** Begin Setting a Timeout with CTO  Checkpoint 10******');

function mytimeoutfunction() {
  console.log('Mytimeout Function');
}
console.log('First line');
setTimeout(() => {
  mytimeoutfunction();
}, 7000);

console.log('Second Line');

console.log('***** End Setting a Timeout with CTO Checkpoint 11*****');


console.log('***** .call() Checkpoint 12*****');

const  person12 = {
  name_first:"Joel",
  name_last: "Thomas",

  printFullName: function(){
    console.log(this.name_first + "  " +this.name_last); // you need this keyword inside 
  }
}

const person12_a = {
  name_first:"Abel",
  name_last: "Geo",
}
// borrowing fuction from person12 object using call
person12.printFullName.call(person12_a);
//person12.printFullName font call like person12.printFullName() pass the new reference object to call method


//Normally we dont keep methods inside a function but outside...
const printLastandFirsttName = function(){
  console.log(this.name_last + "  " +this.name_first); // you need this keyword inside 
}
printLastandFirsttName.call(person12);



//Nirmally we dont keep methids inside a function but outside
const printLastandFirsttNameandLocation = function(Location, district){
  console.log(this.name_last + "  " +this.name_first+ " from " + Location + " from " +district); // you need this keyword inside 
} 


/*const printLastandFirsttNameandLocation = (Location, district) => {
  console.log(this.name_last + "  " +this.name_first+ " from " + Location + " from " +district); // you need this keyword inside;
}; */



printLastandFirsttNameandLocation.call(person12_a, "MVLK", "Alleppy")


console.log('***** .Apply() Checkpoint 13*****');

//Same as call but arguemts after this is apssed as an array list

printLastandFirsttNameandLocation.apply(person12_a, ["APPLYMETHOD", "Alleppy"])


console.log('***** .Apply() Checkpoint 15*****');


// bind returns a copy/reference if that method bound to the onject passed.. thinfs in the fuction will be executed w.r.t the onject when it is called

let boundedMethod = printLastandFirsttName.bind(person12_a)

console.log('boundedMethod', boundedMethod); // function  reference returned  on the console.
// now calling it
boundedMethod();




console.log('***** Currying Checkpoint 15*****');


let multiply = function(x, y){
  console.log(x*y);
}




















 







console.log('***** Currying Checkpoint 15*****');







