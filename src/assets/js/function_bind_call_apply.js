/*jshint esversion: 6 */

function helloObject(){
  console.log("hello object ");
}
helloObject();

var person = {
  firstName: 'Naim',
  lastName : 'Latifi',
  displayFullName: function(){
    // this keyword will hold the value of the object because the object person will invoke the function displayFullName
    console.log("Hello there " + this.firstName + " " +  this.lastName);
  }
};

console.dir(person);
console.log(person.displayFullName());




console.log("============== bind() method =================");
// #example1
var myDiv = {
   paddingTop : '20px',
   paddingBottom : '20px',
   background:'red',
   fontSize: '20px',
   buttonName: 'secondary button',
   changeButtonStyle: function(){
     this.style.paddintTop = '20px';
     this.style.paddingBottom = '20px';
     this.style.backgroundColor = 'red';
     this.style.fontSize = '20px';
    console.log(this);

  }
};

function displayButtonName(){
  console.log("hi" + this.buttonName);
}

var div = document.getElementById('thisValue');
var divBorrowMethod = document.getElementById('borrowMethod');

div.addEventListener('click', myDiv.changeButtonStyle);
divBorrowMethod.addEventListener('click', displayButtonName.bind(myDiv)); // with the help of bind method

//#example2

 var personObject = {
    firstName: 'Naim',
    lastName : 'Latifi',
    displayFullName : function(){
      return this.firstName + ' ' + this.lastName;
    }
 };

var infoPerson = function(datebirth,country){
    console.log(this.displayFullName()); // error because we lost this and it points to global variable
    console.log("Birthday ", datebirth);
}; //bind(personObject); we can allso set bind(personObject) direct after function expression infoPerson
// we set this explicity to personObject
var getCopyBindFunction = infoPerson.bind(personObject);
getCopyBindFunction('860522');


console.log("======================= call() method =================");
//#exaple 1
// with the call we set this explicitly and invoke the function immediately
var sayhello = function(greeting){
  console.log(greeting + ' ' + this.displayFullName());

};
sayhello.call(personObject, 'Hello there'); // in call you can pass parameters of function invoked

//#example2 - todo create an example with DOM elements
console.log("================= apply() method ===================");
// apply works the same except that arguments are passed as arra
sayhello.apply(personObject, ['Hello there']);
