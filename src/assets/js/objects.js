/*jshint esversion: 6 */

console.log("=========== objects literal=========");
// objects are a collection of key properties
var person = {
  firstName :'Naim',
  lastName : 'Latifi'
};
console.log(person.firstName);
console.log(person.lastName);

 // object are reference data types so there are not stored in variable as primitive types (boolean, string, null undefined etc...) but it is stored as reference

//# example2  example variable primitive types
var myName = 'Nai';
var copyMyname = myName;
    myName = 'Naim';
    console.log(myName); // Naim
    console.log(copyMyname); // Nai does not changed primitive types


// object are passed by reference
var myNameObject = {
   name : 'Nai',
   writable: false
};

var copyNameObject = myNameObject;
// change the object name myNameObject
 myNameObject.name = 'Naim';
 console.log("Changed name ", myNameObject);
 console.log("And copyNameObject changed", copyNameObject);



 //# example3 object on DOM
var myDiv = document.getElementById('myObject');
var myCopyDiv = myDiv;
myDiv.id = 'helloDiv';
console.dir(myDiv);
console.dir(myCopyDiv);
myDiv.style.padding = '20px';
myDiv.style.backgroundColor = 'red';
myCopyDiv.style.color = "white"; // notice how changing myCopy div changes its original myDiv as object are passed by reference.






 console.log("============== Constructor object ==============");
 var person1 = new Object();
     person1.firstName = 'Naim';
     person1.lastName = 'Latifi';
     console.log(person1);

  console.log("============= Constructor patterns for creating objects =============");
  function Person(name, lastName,address){
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.displayPersonData = function(){
      console.log('Hello ' + this.name + ' ' + this.lastName + ' ' +  this.address);
    };
  }


  // we can create as many objects person as we want as constructor object that inherits the same property and methods
  // object Tommy

  var tommy = new Person('Tommy', 'Andersson', 'Kungsholmen');

    console.log(tommy);
    console.log(typeof tommy);
    console.log(tommy.displayPersonData());


  var anders = new Person('Anders', 'Jonson', 'Nacka');
      console.log(anders);
      console.log(anders.displayPersonData());


console.log("====================== 'this' ===================");
// check more examples under understandingThis.js

console.log(this); // refers to the global object in browser window
// inside an object referes to the object
//# exampl1
const thisObject = {
    text: "Hello this inside object",
    displayText: function(){
      console.log(this.text); // this refers to the thisObject
    }
};

thisObject.displayText();
//# example 2
function returnElementDiv(){
  console.log(this.id);
}

var getDivForThis = document.getElementById('helloDiv');
   if(getDivForThis){
     getDivForThis.addEventListener('click', returnElementDiv);
   }
