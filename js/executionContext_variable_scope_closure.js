// global variable in global execution context
/*jshint esversion: 6 */
var fullName = "Hi HIQ college Javascript"

// with the creation of firstName a new exeuction context is created
function company(){
    var name = "HIQ"; // it is scoped to inner function company and cannot be access outside the function
    return name;
}

console.log(hiCollege());
// new execution context is created
function hiCollege(){
  var courseName = "Javascript college"; // scoped to innerfunction hiCollege and cannot access outside of the function.
  return courseName;
}
// an execution context is created
function displayfullName(){
  var fullName = "I am overrided"
    function innerDisplayFullName(){
      return fullName; // fullName has access to the outwe variable scope.
    }
    console.log(innerDisplayFullName());
  return fullName; // fullName is a global variable and can be access to the inner function.
}

console.log(fullName);// global variable
console.log(company());
console.log(displayfullName());
//console.log(courseName); // Reference error- courseName is not defined.

console.log("************* Scope chain ************");
  var globally = " and I am global variable";
  function A(){
    var sayHi = "Hi function A";
      return B();
     function B(){
       var name = ", hello to Function B";
       //console.log(privateVar); private scope
       return C();
       function C(){
         var privateVar = "Cannot access outside function";
         // look up process within the chain starts with its own variable object
         // if it is not found then will climb into outer function wrapper B()
         // in this case will look in c() function if not found will look in B()
         // then in B is found and will write name, sayHi then found in A and globally is a global variable that is accessible in any scope
         //
         return sayHi + name + globally;

       }
     }
  }

  let button1 = document.getElementById("button1");
      button1.addEventListener('click', e => {
         let spanResult = document.getElementById('result_scope_chain');
             spanResult.innerHTML = A();
      });

console.log("************** hositing in javascript - variables ");
function variableHositing(){
  //console.log(hellovariable); // it is hoisted as undefined and then will assign a variable
  var helloVariable = "Hello I am hosited to top";
  console.log("I am not undefined-", helloVariable);
}

// Interpreter hoisted the variable to the top of the scope
function onHoistingVariabe(){
  var helloVariable;
  console.log(helloVariable);
  helloVariable = "Hello I am hosited variable and I have a value of undefined";
}
variableHositing();


console.log("************** Closures in javascript **************");

  // say your name and clousre

  function changeHeading(size) {
     return function (){
       let heading3 = document.getElementById('heading_size');
           heading3.style.fontSize = size + 'px'; // closure and see how we can access size from outer variable fucntion
    };
  }

  let button_size_17 = document.getElementById('size-of-17');
      button_size_17.addEventListener('click', changeHeading(17));

  let button_size_19 = document.getElementById('size-of-19');
      button_size_19.addEventListener('click', changeHeading(19));

 let button_size_22 = document.getElementById('size-of-22');
      button_size_22.addEventListener('click', changeHeading(22));
let current_button = document.getElementById('current_font-size');
    current_button.addEventListener('click', (e) => {
        let currentHeadingfontSize = document.getElementById('heading_size');
        let currentFont =  currentHeadingfontSize.style.fontSize = '15px';
            e.target.innerHTML = currentFont;
    });



 let closureSection = document.getElementById('closure');
 // add dynamically 3 buttons on the page
 function addButtons(){
    let button;
    let getResultSpan = document.getElementById('result_button');

    //for(var i = 0; i<3; i++){ // changing i to let in the loop
       for(let i =0; i<3; i++){
       button = document.createElement("button");
       button.innerHTML = "Button" + i;
       button.addEventListener('click', function(e){
         getResultSpan.innerHTML = i;
       });
       closureSection.appendChild(button);
    }
 }

 addButtons();
