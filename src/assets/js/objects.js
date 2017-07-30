/*jshint esversion: 6 */

console.log("=========== objects literal=========");
// objects are a collection of key properties
const person = {
  firstName :'Naim',
  lastName : 'Latifi'
};
console.log(person.firstName);
console.log(person.lastName);

 // object are reference data types so there are not stored in variable as primitive types (boolean, string, null undefined etc...) but it is stored as reference

//# example2  example variable primitive types
let myName = 'Nai';
let copyMyname = myName;
    myName = 'Naim';

    console.log(myName); // Naim
    console.log(copyMyname); // Nai does not changed primitive types

const myNameObject = {
   name : 'Nai',
   writable: false
};
let copyNameObject = myNameObject;
// change the object name myNameObject
 myNameObject.name = 'Naim';
 console.log("Changed name ", myNameObject);
 console.log("And copyNameObject changed", copyNameObject);



 //# example3 object on DOM
  let myDiv = document.getElementById('myObject');
 console.log(myDiv);
 console.log('What type: ',typeof myDiv); // object
 console.dir(myDiv);
 console.log(myDiv.id);
 console.log(myDiv.nodeName);


 let myCopyDiv = myDiv;
      myDiv.id = 'helloDiv';
console.dir(myDiv);
console.dir(myCopyDiv);
myDiv.style.padding = '20px';
myDiv.style.backgroundColor = 'red';

// # example4 create object

var mySecondDiv = document.createElement('div');
   mySecondDiv.id = 'mySecondDiv';
   mySecondDiv.innerHTML = 'Div object 2';
   mySecondDiv.style.padding = '20px';
   mySecondDiv.style.backgroundColor = 'green';
   mySecondDiv.marginTop = '20px';
   document.body.appendChild(mySecondDiv);


 console.log("============== Constructor object ==============");

 let person1 = new Object();
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

  let tommy = new Person('Tommy', 'Andersson', 'Kungsholmen');

    console.log(tommy);
    console.log(typeof tommy);
    console.log(tommy.displayPersonData());


  let anders = new Person('Anders', 'Jonson', 'Nacka');
      console.log(anders);
      console.log(anders.displayPersonData());


console.log("====================== 'this' ===================");

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

let getDivForThis = document.getElementById('helloDiv');
   if(getDivForThis){
     getDivForThis.addEventListener('click', returnElementDiv);
   }


// #Example3

const personObject = {
  name: 'Naim',
  lastName: 'Latifi',
  getFullName: function(){
    //console.log('Bounded', this.name +  ' ' + this.lastName);
  },
  executeInCallBackFunction : function(){
    console.log('In callback function', this.name + ' ' + this.lastName);
  },

  usedInsideClosures: function(){
    // closure - function inside anther function create a closure in javascript
    let displayName =  function(){
      console.log('Hola ' + this.name);
    }.bind(this);
    return displayName();
  }
};

let displayFullName = personObject.getFullName;
    console.log(displayFullName()); // undefined

  // functions method call() to bind the personObject
  console.log("********' displayName by call() '");
let displayNameByCall = personObject.getFullName.call(personObject);
     console.log(displayNameByCall);
  // function method bind() to bind the personObject
let displayNameByBind = personObject.getFullName.bind(personObject);
    displayNameByBind();
console.log("*********** apply() method **********");

let displayNameByApply = personObject.getFullName.apply(personObject);



    // this used in callback functions
    let myElementDiv = document.getElementById('thisOnCallBack');
    //console.log(personObject.executeInCallBackFunction());
      // we are not executing this to the executeInCallBackFunction instead this refers this is now in button element
        myElementDiv.addEventListener('click', personObject.usedInsideClosures.bind(personObject));
    // 'this used inside clousures'
 console.log(personObject.usedInsideClosures()); // undefined because closures functions do not get access to the outer function
