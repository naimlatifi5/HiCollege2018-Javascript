


// variable and scoping ES6
console.log("************ =====Variable and scoping======== ***********");

const hello = "Naim";
//hello = "cannot change";
console.log(hello);
function f(){
  const temp = 4;
  if(true){
    const temp = 123; // shadow the value
    console.log("overided", temp);
  }
  //console.log(temp); // temp is not defined because const are scoped to the block level
}
f();

function letVariableScopeES6(){
   if(true){
     // variables are blocked scope and cannot access outside
     let temp = 123;
     // variables in with let are mutuable and can be changed
     temp = "hello changed";
     console.log(temp);

   }
   //console.log(temp); // error blocked scoped is not defined
}
letVariableScopeES6();

function varVariableES5(){
    if(true){
      var temp1 = 222;
    }
    console.log("ES5 are function scoped(hoisting variables)", temp1);
}
varVariableES5();


// var in for loop
function varInForLoopES6(){
  const arr = [];
  const myArray = [1,2,3];
  for(var i of myArray){
     arr.push(() => i);
  }
  console.log(arr.map(x => x())); // [3,3,3]

}
varInForLoopES6();


// let in for loop
function letInForLoopES6(){
  const arr1 = [];
  const myArray1 = [1,2,3];
  // use const in loops because only one binding is created per iteration
  for(const i of myArray1){
      arr1.push(() => i);
  }
  console.log(arr1.map(x => x())); // [1,2,3]
}
letInForLoopES6();
// constans in object declaration

const myModule = {
    hello: 'hi',
    goodbye : 'bye'
};

console.log(myModule);
myModule.hello = 'hi there ,changed property name even that it is a constant object';
console.log(myModule);
// cannot be redeclared
//const myModule = {
//  hello : 'hello',
//  goodbye: 'good'
//};

//console.log(myModue);

console.log("============ Arrow function ============");

function handleClick(e) {
  console.log(e);
  return "I changed the content";

}

// ES5
function ES5ArrowFunction(){
   var button = document.getElementById('static-button');
      button.addEventListener('click', function(){
        console.log('ES5' ,this);
        this.innerHTML = handleClick();
      });
}

// ES6
function ES6ArrowFunction(){
  var button  = document.getElementById('arrow-function');
      button.addEventListener('click', (e) => {
        if(this === window){
          // value of this in the arrow function is determine where the arrow function is defined
          console.log('context',  this);
          // always e.currentTarget refers to the DOM element with whose event listener is attached
          console.log(e.currentTarget);
        }
        e.currentTarget.innerHTML = 'I am an arrow function'; // now this referes to the target element;
      });
}


// ES5
var multipleNumber = function(num1, num2){
    return num1 * num2;
};
console.log('Multiplication is = ', multipleNumber(3,3));

// ES6- shorter syntax , no need for function name and return value
let multipeNumberES6 = (num1, num2) => num1 * num2;
  console.log("Multiplication ES6 = " , multipeNumberES6(4,4));

// ES6 arrow function -if there is no parameter then curly braces are needed around function body
let getDocument = () => {
   console.log("Document element" , document);
};
getDocument();

// arrow functions on arrays

let phones = [
  { name: 'iphone',
    price: '6000kr'
  },

  {
    name: 'samsung',
    price: '5500kr'
  },

  {
    name: 'Nokia',
    price: '3000kr'
  },

  {
    name: 'Nokia2 ',
    price: '3000kr'
  }

];

// ES5
let mapWithPricePhones = phones.map(function(item){
      return item.price;
});

console.log('Phones by price ', mapWithPricePhones);
console.log(typeof mapWithPricePhones);


// ES6

 let mapWithNamePhones = phones.map((item) => item.name);
 console.log("Phone by names " , mapWithNamePhones);

// ES6 filter by price

let filterByPrice = phones.filter((item) => item.price == '3000kr');
console.log("Filtered by price " , filterByPrice);



function Phone(phoneName) {
  this.phoneName = phoneName;
}
Phone.prototype.addPhoneArray = function(arr){
    'use strict';
    // one solution to this problem is to get the this context with var that
    //var that = this;
   //return arr.map(function(arrayName){
    //  return this.phoneName + " "  + arrayName.name;
  // }.bind(this)); // another solution is to bind this




  // no need for 'that' or bind(this)
  // ES6
  return arr.map((arrayName) => this.phoneName + ' ' + arrayName.name);



};

let myPhone = new Phone('New brand ');
console.log(myPhone);
console.log(myPhone.addPhoneArray(phones));

// ES5
var helloFunction = function(){
    console.log("function expression with ES5");
};

console.log(helloFunction());

let helloFunctionES6 = () => {
  console.log("Function expression with IE6");
};

console.log(helloFunctionES6());


const myModuleExample = {
  hi : 'Hello data here',
  parseData : function(){

    this.greeting(function(returnData){
       console.log(returnData);
       console.log(this); // window
       //console.log(this.hi); // undefined
    });

  },
  greeting : function(callback){
    callback();
  }
};

const myModuleExampleES6 = {
  hi: 'Hello ES6 and arrow function',
  parseData : function() { // not arrow function because it redefined the scope of this to window global object
    this.greeting((hellothere) => { // arrow will have as parent object so this is object
        console.log('Not global anymore', this.hi);
    });
  },

  greeting: function(callback){
    callback();
  }
};

console.log(myModuleExampleES6.parseData());





console.log(myModuleExample.someData);
console.log(myModuleExample.parseData());

console.log("****************** End of arrow function **************");
    // IIFE immedially invoked funciton expresion
         {
             ES5ArrowFunction();
             ES6ArrowFunction();
         }

// if used _ there is a function arrow without parameters
const myFunctionWithoutParameters = _ =>{
   console.log("hello function");
};


let objectI = {
   notThis: () => {
     console.log(this); // window, never use arrow function inside object methods
   }
};

console.log("================= Default parameters in ES6 ================");


function params(name, lastName, birthday){
  console.log("Info : "  + name + lastName + birthday);
}

params ('Naim', 'Latifi', '8605225393');

// default parameter if not givem

params('Naim', 'Latifi'); // Naim Latifi undefined

// ES5 default parameters
console.log("******* Default params in ES5 =========");
function defaultParamsBirthday(name, lastName, birthday){
       birthday = birthday || '8605225393';
       console.log("Info:" + name + " " +  lastName +  " " +  birthday);
}

//defaultParamsBirthday('Naim', 'Latifi');
defaultParamsBirthday('Naim', 'Latifi', '860522-5393');


function defaultParamsName(name , lastName, birthday){
   let setName  = name ? name : 'Naim';
   console.log(setName + lastName + birthday);
}

defaultParamsName('Latifi', '86052259393');

// ES6

function defaultParamsBirthdayES6 (name , lastName, birthday = '8605225393'){
   console.log(name , + '' + lastName + ' ' + birthday);
}

defaultParamsBirthdayES6('Naim', 'Latifi');

function helloThere(sayHi){
    sayHi = sayHi || 'Hello';
    console.log(sayHi);
  }

  function helloThereES6(sayHi='Hello ES6 parameter') {
    console.log(sayHi);
  }


  console.log("========== Function parameters ES5 vs ES6 ===========");

  function logAllArguments(){
     for(var i=0; i<=arguments.length; i++){
        console.log(arguments[i]);
     }
     console.log("we have ", arguments.length , "arguments");
  }

  function logAllArgumentsES6(...argument){
     for(const i of argument){
       console.log(i);
     }
      console.log(argument.length);
  }

  logAllArguments('naim', 'latifi');
  logAllArgumentsES6('test1', 'test2');


console.log("=============== Destructing objects ES6 ============ ");
    const personObject = {
        name: ' Naim',
        lastName: "Latifi"
      };

    // accessing property on object with destructing ES6
    let { name, lastName } = personObject;

  // what ES does here is that it assign name and lastName as variables as :
    // let name = personObject.name;
    // let lastName = personObject.lastName;
    // console.log(name1, + lastName1);

    console.log(name);
    console.log(lastName);
    // if there is no property on object that undefined is returned
    let {birthday} = personObject;
    console.log(birthday);

    // we can add parameters as in function for destructing object
    let {city  =  'Stockholm'} = personObject;
    console.log(city);

   console.log("================ Destructing arrays in ES6 ==========");

    // similar as destructing objects but we use square brackes instead []


    let myArrayData = ['1', '2', '3'];

    // destruct array object
    let [one] = myArrayData;
    console.log("Get array first element " , one);

    // get the rest of oarameters use spear operator with ...rest
    let [...rest] = myArrayData;
    console.log("get the whole array- ", rest); // [1,2,3]








//
//
// console.log("============ string interpolation ES5 vs ES6 and template engine  ============");
//
// function printOutES5(a, b ){
//   console.log('a = ' + a + ' b = ' + b);
// }
// printOutES5(4,3);
//
// // ES6
// function printOut(x,y){
//   console.log(`${x}, ${y}`);
// }
// printOut(4,5);
//
//  function templateES6(queryElement){
//    const list = queryElement;
//    for(i =0; i<=list.length; i++){
//       console.log(list[i]);
//    }
//  }

//
// function clickMe(){
//   let listTags = document.getElementsByTagName('*');
//    templateES6(listTags);
// }
//
//














//
//     console.log("************* Manipulation with Array ES5 vs ES6 ************");
//     var arr1 = [1,2,3];
//     var arr2 = [4,5,6];
//     //arr1.push(arr1,arr2); // inside arr1 we will add arr1, arr2
//     // with apply we will add the context for arr1 to arr2 inside arr1
//     //arr1.push.apply(arr1,arr2); // result [1,2,3,4,5,6]
//     //console.log(arr1);
//
//     // ES6 array with spread operator
//     arr1.push(...arr2);
//     console.log(arr1);
//
//     // concating array with javascriot
//
//     var arr3 = ['a', 'b', 'c'];
//     var arr4 = ['d', 'e','f'];
//     console.log(arr3.concat(arr4));
//
//     // in ES6 with the use of spread function we can do like this
//     const newArray = [...arr3, ...arr4];
//     console.log(newArray);
//
//     console.log("************ From object literals to methods and functions ES5 vs ES6");
//
//     var object1 = {
//       print1: function(){
//         console.log('print1')
//       },
//       print2: function(){
//         console.log('print2');
//         this.print1();
//       }
//     }
//
//     console.log(object1.print2());
//
//     // ES6 has method syntax definition
//
//     var object2 = {
//       print3(){
//         console.log("print 3");
//       },
//       print4(){
//         this.print3();
//       }
//     }
//     console.log(object2.print3());
//
//     console.log("*********** From cunstructors to classes ***************");
//
//     function Person(name){
//       this.name = 'hello Person';
//     }
//     Person.prototype.displayName = function(){
//       console.log(this.name);
//     }
//
//
//     var person1 = new Person('Naim');
//     console.log(person1.name);
//
//
//     class Person1 {
//       constructor(name) {
//         this.name = name;
//       }
//       displayName() {
//        return this.name;
//       }
//
//     }
//
//    const person2 = new Person1('naim');
//    console.log('I am person ' ,person2.displayName());
//
//
//
//      class AnimalES6 {
//          constructor(name) {
//              this.name = name;
//          }
//
//          doSomething() {
//              console.log("I'm a " + this.name);
//          }
//      }
//
//
//      let lions = new AnimalES6('test1');
//      lions.doSomething();
//
//
//      console.log("*************Inheritance in ES5 vs ES6 *************");
//
//
//
//      function Employe(name, title){
//        Person.call(this,name);
//        this.title = title;
//
//      }
//
//      Employe.prototype = Object.create(Person.prototype);
//      Employe.prototype.constructor = Employe;
//      Employe.prototype.displayName = function(){
//        return Person.prototype.displayName.call(this) + this.title;
//      }
//
//      var employ = new Employe('test ', 'programmer');
//       console.log(employ.displayName());
//
//
//       class Employ1 extends Person {
//         constructor(name, title){
//           super(name);
//           this.title = title;
//         }
//         discribe(){
//           return super.displayName() + this.title;
//         }
//       }
//
//       var employ1 = new Employ1('naim', 'ES6');
//       console.log(employ1.displayName());
//       console.log(employ1.discribe());
//
//
//       console.log("**************** String methods ES5 vs ES6 *****************");
//
//       var text = "hello there string";
//       console.log(text);
//       if(text.indexOf('h') === 0 ){
//         console.log("I found the character ")
//       }else {
//         console.log("I did not find the character for you ");
//       }
//
//       // ES6
//       console.log("*********ES6 string methos ***********");
//       const text1 = "Hi thre string, where nice stuff";
//       if(text1.startsWith('x')){
//         console.log("Indeed, I found the character for you");
//       }else {
//         console.log("well, I did not find anything yet");
//       }
//
//       if(text1.includes('j')){ // checks if the string contains the character
//         console.log("we have an element chararcter");
//       }else {
//         console.log("we do not have character");
//       }
//
//       console.log(text1.endsWith('g')); // if the string ends with a character
//
//
//       // turning strings into arrays ES5
//       console.log(text1.split(''));
//       console.log(text1.split(','));
//
//       // ES6 with the use of spread operator we can turn a string to an array easily
//
//       const stringToConvert = 'I will be converted to array';
//       const convertedArray = [...stringToConvert];
//       console.log(convertedArray);
//
//       console.log("*********** = Symbols in ES6 ************");
//
//
//       console.log("*********** Template literals ************");
//
//       let myName = 'Naim';
//
//       console.log(`Literal templates-Hello there template and ${myName} `);
//       let string1 = 'Hello there ';
//       // map the array to an template literal and represent it on the DOM
//
//       const objectArrays = [];
//
//       const obje1 = {
//         name: 'Naim',
//         lastName: 'Latifi'
//       };
//
//       const obje2 = {
//         name:'George',
//         lastName: 'Andersson'
//       };
//
//       objectArrays.push(obje1, obje2);
//       console.log(objectArrays);
//
//       // function with tempalte ES6
//       const template = name =>
//
//        `<div>
//            ${name.map(item => `
//             <span>${item.name}</span>
//             <span>${item.lastName}</span>
//             ` ).join('')}
//         </div>`;
//         // create an div element
//         var divElement = document.createElement('div');
//             divElement.classList.add('template-literal-ie6');
//             divElement.innerHTML = template(objectArrays);
//             document.body.appendChild(divElement);
//         console.log(template(objectArrays));
//
//
//
//
//
//
//
//
//
//
