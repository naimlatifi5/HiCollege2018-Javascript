// Function declaration are hoisted
/*jshint esversion: 6 */
var printMe = "Print me";
console.log("================= Function creation ==================");
function sayHello(){
   console.log("hello there function declaration");
   console.log(printMe); // printMe is in global context and thus have access sayHello
 }
sayHello(); // New execution context is created

// function creation with arguments
function sayHelloWithParam(name){
   console.log("Hi there " + name);
}
sayHelloWithParam('Naim');

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




console.log("=================Callback functions========================");
  // callback functiokn a function that is passed to another function as parameter
  // a callback function is send to the click even method
 var buttonCallBack = document.getElementById('callbackFunctionButton');
     buttonCallBack.addEventListener('click',divElement);


     function divElement(){
       // create a div here and append when clicked
       var myDiv = document.createElement('div');
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
     var buttonGreeting = document.getElementById('greetingcallback');
         buttonGreeting.addEventListener('click', function(e) {
           fullName('Naim', 'Latifi', greeting); // note we are not executing the callback function here but we are passing as variable to execute later on fullName
         });


    // Another example with callback function
    // here we want to create our div
    function createDivElement(el){
        var divElement = el.target;
            divElement.style.width = '50px';
            divElement.style.height = '50px';
            divElement.style.padding = '20px';
            divElement.id='myDivElement';
    }

    // we pass createDivElement function as parameter
    function changeBackgroundColordDiv(e, callbackDivElement){
       var randomBackgroundColor =  'rgb(' +
                                      Math.round(Math.random()*255) +
                                      ',' +
                                      Math.round(Math.random()*255) +
                                      ',' +
                                      Math.round(Math.random()*255) +
                                    ')';
      e.target.style.backgroundColor = randomBackgroundColor;
      callbackDivElement(e); // we invoke the function callBackDivElement that is our createDivElement

    }

    var getDivElement = document.getElementById('changeBackgroundColor');
        getDivElement.addEventListener('click', function(e) {
          changeBackgroundColordDiv(e, createDivElement);
        });
