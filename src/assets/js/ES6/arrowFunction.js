/********************************************
*     Arrow function ES6                    *
*                                           *
**********************************************/
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
        e.srcElement.innerHTML = 'I am an arrow function'; // now this referes to the target element;
      });
}


// ES5
var multipleNumber = function(num1, num2){
    return num1 * num2;
};
console.log('Multiplication is = ', multipleNumber(3,3));

// ES6- shorter syntax , no need for function name and return value
// expression after arrow is always return
// Note that if you have only one arguments in function with the arrow function you can ommit the parentheses
// instead of (num1) => 'expression' you can write num1 => 'expression'

let multipeNumberES6 = (num1, num2) => num1 * num2;
  console.log("Multiplication ES6 = " , multipeNumberES6(4,4));

// whenever you have one expression you do not need curly braces see above otherwise if your code has multople lines with expression then use return and curly braces
let multipleNumberES6 = (num1, num2) => {
  return num1 * num2;
}

// ES6 arrow function -if there is no parameter then curly braces are needed around function body
let getDocument = () => {
   console.log("Document element" , document);
};
getDocument();

// arrow functions on arrays

const phones = [
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

const arrayData = ['1', '2', '3'];
    arrayData.forEach(function(element){
    console.log(element);
});

// ES5
const mapWithPricePhones = phones.map(function(item){
      return item.price;
});

//console.log(phones);
console.log('Phones by price ', mapWithPricePhones);
console.log(typeof mapWithPricePhones); // object

// ES6
 // only one parameter so remove parenthese, we have only one expression remove return statement
 let mapWithNamePhones = phones.map(element => element.name );
 console.log("Phone by names arrow function ES6 " , mapWithNamePhones);

// ES6 filter by price
let filterByPrice = phones.filter(item => item.price == '3000kr');
console.log("Filtered by price arrow function ES6 " , filterByPrice);



// this determined by arrow function- see below
// construction function that creates the object branndYear
function Phone(brandYear) {
  this.brandYear = brandYear;
}

Phone.prototype.addBrandYear = function(phones){
    // this === myPhone
    'use strict';
    //one solution to this problem is to get the this context with var that
    //var that = this;
    // return phones.map(function(phone){
  // return  `${this.brandYear} ${phone.name}`; // if there is no bind or self variable inside function this has another lexical scope
  // }.bind(this)); // another solution is to bind this

  // no need for 'that' or bind(this)
  // ES6 and arrow function
  //
  return phones.map(phone => this.brandYear + ' ' + phone.name);

};

let myPhone = new Phone('2017');
console.log(myPhone);
console.log(myPhone.addBrandYear(phones));

// case when arrow function would not work
const profile = {
    name: 'Naim',
    getName: function(){ // if replacing with ()  => this would not be the name but global scope
         return this.name;
    }
};
console.log(profile.getName());



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

// if used _ there is a function arrow without parameters
const myFunctionWithoutParameters = _ =>{
   console.log("hello function");
};


let objectI = {
   notThis: () => {
     console.log(this); // window, never use arrow function inside object methods
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
