// Function declaration are hoisted
/*jshint esversion: 6 */

console.log("================= Function creation ==================");

function sayHello(){
   console.log("hello there function declaration");
 }

sayHello();

// function creation with arguments
function sayHello(name){
   console.log("Hi there " + name);
}
sayHello('Naim');

// function creation with return value
function sayHelloReturnName(name){
  return "Hi there " + name;
}

console.log(sayHelloReturnName('Naim'));


// functions with multiple arguments
function helloArguments (name, lastName){
  console.table(arguments);
  console.log(typeof arguments);
}

helloArguments('Naim', 'Latifi');

// function expression are stoerd in varaible and are not hoisted
// since these functions they do not have a name they are also called anonymous functions
var helloMyExpressionFunction = function(){
   console.log(arguments);
   console.log(arguments.length);
};
helloMyExpressionFunction(2,3);
// functions are instance of a function
console.log(helloMyExpressionFunction instanceof Function); // true
// we said that functions are firstclass object and thus are instance of object as well
console.log(helloMyExpressionFunction instanceof Object);

// functions with default parameteres ES5

  function sayHiDefaultParam(name){
    name = name || 'Naim';
    return name;
  }
  console.log("Hello there ", sayHiDefaultParam());
  // drawback what if you have a number that retunr falsy value for the argument then will return the second

  function addFive(number){
    number = number || 5;
    return number;
  }

  console.log(addFive(0));

 console.log('================= Exercies with functions scope ================');

 /* Question 1 what will print out here */
   function foo(){
       function bar(){
           return 3;
       }
       return bar(); // since the function is a constructor function thus have global scope and will return 8
       // we said that two function with the same name will execute the last function will be the owner
       function bar(){
           return 8;
       }
   }

   console.log(foo()); // 8

   /* Questioln 2 what will print out */

   function foo2(){ // we have a constructor function
       var bar = function() { // we have an expression function
           return 3;
       };
       return bar(); // return 3 and will not execute anything after return statemenet. we said that on function with return statement will stop executing code

       var bar = function() {
           return 8;
       };
   }
   console.log(foo2()); // 3

   /* Questioln 3 what will print out */

   console.log(foo3()); //3  we said the function declaration have a global scope and are loaded before any code else is loaded in browser execution context
   function foo3(){
       var bar = function() { // we have an expression function p
           return 3;
       };
       return bar(); // will return 3 and stop execution after return statement.
       var bar = function() {
           return 8;
       };
   }


   /* Questioln 4 what will print out */

   function foo4(){ // we have a constructor function
       return bar(); // we have return an expression function before declaring will throw an error -  bar is not a function
       var bar = function() {
           return 3;
       };
       var bar = function() {
           return 8;
       };
   }



console.log("=================Callback functions========================");


  // callback functiokn a function that is passed to another function as parameter
  // a callback function is send to the click even method
 let buttonCallBack = document.getElementById('callbackFunctionButton');
     buttonCallBack.addEventListener('click',divElement);


     function divElement(){
       // create a div here and append when clicked
       let myDiv = document.createElement('div');
           myDiv.style.width = "50px";
           myDiv.style.height = "50px";
           myDiv.style.background = 'red';
           myDiv.id ="myDiv";
           myDiv.innerHTML =  "Hello my Div";
           myDiv.style.padding = "22px";
           myDiv.style.marginTop = "10px";
           document.getElementById('main').appendChild(myDiv);
     }
     // another example with callback function
     // let say we have a function that prints name , lastname and the function callback where it will print out
     // the text "Special greeting for you " if the callback function is a function otherwise 'Naim and last name if there is no callback function ´';

      function resultGreetingElement(){
        return document.getElementById('result');
      }

      function fullName(name, lastname, callback){
       // make sure that the function passed as paramter it is a function
        if(typeof callback === 'function'){
           callback(name);
        }else {
           resultGreetingElement().innerHTML =  `Thank you: ${name}, ${lastname} but we do not have a callback function passed`;
        }

     }
     // greeting function is called and invoked inside fullName, note that callbacks functions create closures
     function greeting (name){
        resultGreetingElement().innerHTML =`Special greeting for you ${name}`;
     }
    // when on button clicked call FullName with the callback passed as parameter
     let buttonGreeting = document.getElementById('greetingcallback');
         buttonGreeting.addEventListener('click', () => {
           fullName('Naim', 'Latifi', greeting); // note we are not executing the callback function here but we are passing as variable to execute later on fullName

         });


    // Another example with callback function
    // here we want to create our div
    function createDivElement(el){
        let divElement = el.target;
            divElement.style.width = '50px';
            divElement.style.height = '50px';
            divElement.style.padding = '20px';
            divElement.id='myDivElement';
    }

    // we pass createDivElement function as parameter
    function changeBackgroundColordDiv(e, callbackDivElement){
       let randomBackgroundColor =  'rgb(' +
                                      Math.round(Math.random()*255) +
                                      ',' +
                                      Math.round(Math.random()*255) +
                                      ',' +
                                      Math.round(Math.random()*255) +
                                    ')';
      e.target.style.backgroundColor = randomBackgroundColor;
      callbackDivElement(e); // we invoke the function callBackDivElement that is our createDivElement

    }

    let getDivElement = document.getElementById('changeBackgroundColor');
        getDivElement.addEventListener('click', (e)  => {
          changeBackgroundColordDiv(e, createDivElement);
        });


 
