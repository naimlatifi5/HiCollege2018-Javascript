console.log("============== bind() method =================");

var personObject = {
   firstName: 'Naim',
   lastName : 'Latifi',
   displayFullName : function(){
     return "Hello from object " + this.firstName + ' ' + this.lastName;
   }
};

var infoPerson = function(datebirth,country){
   console.log("I am binded and I own the object context ", this.displayFullName());
   console.log("Birthday ", datebirth);
   console.log('Country:' , country)
};
// we bind personObject to resolve the "this" context
//console.log("What is the 'this' value", infoPerson('860522', 'Sweden'));
var getCopyBindFunction = infoPerson.bind(personObject);
getCopyBindFunction('860522', 'Sweden');


// #example2 with OM
var myDiv = {
   divName: 'secondary button',
   changeButtonStyle: function(){
     this.style.paddingTop = '20px';
     this.style.paddingBottom = '20px';
     this.style.backgroundColor = 'red';
     this.style.fontSize = '10px';
     this.style.width = "150px";
     this.style.height = "150px";
    console.log("This referes to element div " , this);
  }
};

function displayButtonName(){
  // change the div name
  console.log("Our div name", this.divName);
  this.divName = 'Square div';
  console.log("What is 'this' ", this);
  console.log("Our div name now ", this.divName);
}

var div = document.getElementById('thisValue');
var divBorrowMethod = document.getElementById('borrowMethod');
div.addEventListener('click', myDiv.changeButtonStyle);
divBorrowMethod.addEventListener('click', displayButtonName.bind(myDiv)); // with the help of bind method


console.log("======================= call() method =================");

// with the call we set 'this' explicitly and invoke the function immediately
var sayhello = function(greeting){
  console.log(greeting + ' ' + this.displayFullName());
};
sayhello.call(personObject, 'With call() method we say : '); // in call you can pass parameters of function invoked


console.log("================= apply() method ===================");
// apply works the same except that arguments are passed as arra
sayhello.apply(personObject, ['Hello there']);
