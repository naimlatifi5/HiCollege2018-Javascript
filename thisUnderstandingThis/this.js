console.log("Hello this ", this);

// "this" in simple functions
function simpleFunction() {
  var name = "hello";
  console.log("In simple function", this); //refers to window but as we are using babel it modules are boundled to undefined- se example outside src element
}

simpleFunction();
console.log(hello);


// this with function inside object ==> window
var myObject = {
   helloThere: function(){
     simpleFunction(); // referst to window
   }
}
console.log("function inside function object " , myObject.helloThere());

    // "this" in an object
var myObjectWithThis = {
     greeting: 'hi',
     sayHi: function(){
       console.log(this.greeting); // "this" in object refers to the object itself
     }
  }
console.log(myObjectWithThis.sayHi());



// understanding this in constructor function
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

let person = new Person('Naim', 'Latifi');
console.log(person.name); // this.name
console.log(person.lastName);


// this inside another function in object method

var myObject2 = {
   printSomethingLater: function(){
     var that = this // work around this issue we have pattern like assignen that = this ans where javascript will look in scope chain for that variable.
     setTimeout(function(){
       that.somethingToPrint()
     }, 1000)
   },
   somethingToPrint: function(){
     console.log("printed after 1 second");
   }
}

myObject2.printSomethingLater();
