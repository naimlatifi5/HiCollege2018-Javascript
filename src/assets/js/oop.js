var myObject = new Object();

console.log(myObject);
console.log(typeof myObject);
myObject.name = "Naim";
console.log(myObject);
myObject.name = "changed";
console.log(myObject);


 var person = {
   name: "Naim",
   lastName : "Latifi",
   sayHi: function(){
     console.log("hello there ", this.name + this.lastName);
   }
 }
// instead of duplicating multiple objects with with different persons name we use constructor object
console.log(person);
console.log(person.sayHi());

console.log("============ Constructor functions ==================");
// constructor function person
function Person(name){
  this.name = name;
  this.sayHi = function(){
    console.log("Hello there" , this.name);
  }
}
// 1. create an new object
// 2. assign the this value of the constructor to new object create
// 3. execute the code inside constructor by adding properties
// 4. return the new create object
var person1 = new Person('Naim');
var person2 = new Person('Bob');
// we can create a unlimited instances from Person constructor function
console.log(person1);
console.log(person1.sayHi());
console.log(person2);
console.log(person2.sayHi());

console.log("is person1 a constructor function ? " , person1.constructor === Person); // true because Person is the constructor function
console.log(person1 instanceof Object); // true
console.log("Yes person1 it is an instance from Person " ,person1 instanceof Person);
// Prototypes- Each function has prototype properties which is an object that contains properties and methods that are available to instances of particular reference type.

console.log("=================== Prototype ==================");
function Person1() {}
// Benefits with proptotype is that all of its properties and methods are shared among object instances
Person1.prototype.name = 'Naim';
Person1.prototype.sayName = function(){
  console.log("Print my name ", this.name);
}

var hiPerson1 = new Person1('Naim');
console.log(hiPerson1);
console.log(hiPerson1.sayName())

var hiPerson2 = new Person1('Anders');
console.log(hiPerson2);

console.log("Yes the are the same method in prototype", hiPerson1.sayName() === hiPerson2.sayName());

// to see if there is a relationshipt between objects there is a method called isPrototypeof
console.log("Is prototype of ? " ,Person1.prototype.isPrototypeOf(hiPerson1)); // true because it is a prototype
console.log("Is prototype of ?", Person1.prototype.isPrototypeOf(hiPerson2)); // true because it is a prototype
console.log("Is prototype of ? ", Person1.prototype.isPrototypeOf(person1)); // false because person1 is not relation with prototype of Person1 function contructor

// or Object.getPrototypeOf()
// we want to check the object hiPerson1 is prototype of function with prototype
console.log("Object prototype of instance object is is equal to Person1.prototype ", Object.getPrototypeOf(hiPerson1) === Person1.prototype);
// hasOwnProperty() methods of Object

// check if instance hiPerson1 has own property- it avoids prototype.
console.log("Does the instance hiPerson1 has own property", hiPerson1.hasOwnProperty('name') ? "yeeeees" : "Noooooo");
// but check if instance person1 has own property
console.log("Does the instance person1 has own property ?" , person1.hasOwnProperty('name') ? "Yeeeees" : "Noooooo");


// One of the drawbacks of prototype is when used with references types
function Person3(){}
Person3.prototype.firstName = "Naim";
Person3.prototype.age = "31";
Person3.prototype.occupation = "Web developer";
Person3.prototype.friends = ['Anders', 'Kristinn'];
Person3.prototype.printPersonInfo = function(){
  console.log(this.firstName);
  console.log(this.age);
  console.log(this.occupation);
}

// first person
var naim = new Person3();
naim.friends.push('Johan');

var anders = new Person3();
console.log(naim.printPersonInfo());
console.log("Naim added one more friend", naim.friends);

// Anders
console.log(anders.printPersonInfo());
console.log("Anders also get friends changed from instance naim" , anders.friends);
// thus , it is good practice to use a combination of contructor and prototype

 function Person4(name, age, occupation, friends){
   this.name = name;
   this.age = age;
   this.occupation = occupation;
   this.friends = friends;
 }

// printPersonInfo() is shared among instances
 Person4.prototype.printPersonInfo = function(){
   console.log("Person info" + "\n" + this.name + this.age + "\n" + this.occupation + "\n" + this.friends);
 }


var firstPerson  = new Person4('Naim', '31', 'Web developer', ['Anton', 'Johan']);
var secondPerson = new Person4('Anders' , '33', 'Doctor', ['Jonatan', 'Andrea']);

firstPerson.friends.push('In instace firstPerson - friend John');
console.log(firstPerson);
console.log(secondPerson);
console.log("What are my friends- firstPerson " , firstPerson.friends);
console.log("What are my freinds - secondPerson" , secondPerson.friends);

console.log("============ An example with DOM ")
// An example with DOM
 function Image(name , src){
   this.name = name;
   this.src = src;
 }

 // we want to have the prototype method to crate the image
Image.prototype.createImage = function(){
  var containerToAppendImage = document.querySelector('.image-container');
  var image = document.createElement('img');
      image.src = this.src;
      image.alt = this.name;
      image.className = 'gallery-image';
      image.style.width = '200px';
      image.style.height = '200px';
      image.style.marginRight = '20px';
      containerToAppendImage.appendChild(image);
}

var dog1 = new Image('myFirstImage', 'https://images.dog.ceo/breeds/newfoundland/n02111277_3153.jpg');
dog1.createImage();

var dog2 = new Image('mySecondImage', 'https://images.dog.ceo/breeds/kuvasz/n02104029_4317.jpg');
dog2.createImage();


// ============= Inheritances ===================
console.log("================== Inheritance =====================");

function Father(){
  this.address = 'Brooma';
  this.newAddress = 'Nacka';
}

Father.prototype.familyName = 'Latifi';
Father.prototype.getFamilyAddress = function() {
  console.log("Family address", this.address);
}

function Child(){
  this.address = "Stockholm";
  this.newAddress ="Solna";
}

Child.prototype = new Father(); // prototype chaining where my child has access to all my fathers info
var myBoy = new Child();
console.log(myBoy.familyName);
console.log(myBoy);

// how can we know that myBoy is an instance of Child or Father ?
console.log("My boy instance of object", myBoy instanceof Object); // true because object prototype exist in Father
console.log("My boy instance of child constructor", myBoy instanceof Child); // true because myBoy is an instance of Child
console.log("My boy instance of Father constructor", myBoy instanceof Father); // due to prototype chaining relation Fathers prototype are also Child's prototype inheritance or prototype chaining

Child.prototype.getChildAddress = function() {
   console.log("Child address:", this.address);
 }


// instance child1
 var child1 = new Child();
// we can override existing method on fathers as long as Prototype chaining is created as above - Child.prototype = new Father()
// override existing method in superType  Father() and getFamilyAddress is being shadowed in prototype chain
 Child.prototype.getFamilyAddress = function(){
     console.log("New address to my son override from family address", this.newAddress);
 }
 child1.getFamilyAddress(); // family address overrided
 child1.getChildAddress(); // new child address


console.log("================= Constructor stealing on reference types ================");

 // One drawback with prototype chain is on reference types
 function FamilyAddress(){
   this.address = ['Bromma', 'Stockholm', 'Nacka'];
 }

 function ChildAddress() {
   //inherited from FamilyAdress
   //FamilyAddress.call(this);
 }

// now childAddress has all properties and methods from familyAddress - prototype chaining.
ChildAddress.prototype = new FamilyAddress();
var child2 = new ChildAddress();
child2.address.push('Solna');
console.log("Child2 added new address " , child2);
var child3 = new ChildAddress();
console.log("Child 3 does not want to have a new address added from child2", child3);

// How to resolve the issue that changes made instance child2 to not reflect on instance child3 ?
// Constructor stealing --- a technique we call the constructor from the SuperType FamilyAddress to the subType childAddress- added to ChildAddress comment out.
// Combination of constructor stealing and prototype chain- to fix the issue with reference types

function Father1(name){
  this.name = name;
  this.fathersName = 'Anders';
  this.addresses = ['Söderberga', 'Nacka'];
}
Father1.prototype.sayFatherName = function(){
  console.log(this.fathersName);
}

function Child3(name, age){
  // stealing constructor
   Father1.call(this, name);
   this.age = age;
}
// all properties
Child3.prototype = new Father1();
Child3.prototype.sayName = function(){
  return this.name;
}
var firstChild = new Child3('Joe', 22);
console.log("First child ", firstChild);
console.log(firstChild.sayFatherName());
console.log(firstChild.sayName());

firstChild.addresses.push('New address');
console.log(firstChild.addresses);

var secondChild = new Child3('Andrea', 30);
console.log(secondChild);
console.log(secondChild.sayFatherName());
console.log(secondChild.sayName());
console.log(secondChild.addresses);
