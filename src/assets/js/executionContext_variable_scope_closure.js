// global variable in global execution context
/*jshint esversion: 6 */
var fullName = "Hi HIQ college Javascript"

// with the creation of firstName a new exeuction context is created
function company(){
    var name = "HIQ"; // it is scoped to inner function company and cannot be access outside the function
    return name;
}
//console.log(name  );
var a;
 a = "hello I am not undefined";
 console.log("Print me ", a);

console.log(company());
// new execution context is created

var hiCollege = function (){
  var courseName = "Javascript college"; // scoped to innerfunction hiCollege and cannot access outside of the function.
  return courseName;
}
console.log(hiCollege());

// an execution context is created
function displayfullName(){
  var fullName = "I am overrided"
    function innerDisplayFullName(){
      return fullName; // fullName has access to the outer variable scope.
    }
  console.log(innerDisplayFullName());
  return fullName; // fullName is a global variable and can be access to the inner function.
}

console.log(displayfullName());
//console.log(courseName); // Reference error- courseName is not defined.



console.log("*************======= Scope chain ===========************");
// where the function sets physically looks for the outer environemnt for variable look up

  var globally = " and I am global variable"; // global object (wnindow)
  function A(){
    var sayHi = "Hi function A";
    return B();
      function B(){
       var name = ", hello to Function B";
        //console.log(privateVar); private scope // cannot access it is only private to function b
       return C();  // new execution context is created.
        function C(){
         var privateVar = "Cannot access outside function";
         // look up process within the chain starts with its own variable object
         // if it is not found then will climb into outer function wrapper B()
         // in this case will look in c() function if not found will look in B()
         // then in B is found and will write name, sayHi then found in A and globally is a global variable that is accessible in any scope
         return sayHi + name + globally + privateVar;
       }
     }
  }

  var button1 = document.getElementById("button1");
      button1.addEventListener('click', function(e) {
        var spanResult = document.getElementById('result_scope_chain');
        spanResult.innerHTML = A();
  });


  console.log('================= MoreExercies with functions scope ================');
      /* Question 1 what will print out here */
        function foo(){
            function bar(){
                return 3;
            }
            return bar(); //
            // we said that two function with the same name will execute the last function will be the owner
            function bar(){
                return 8;
            }
        }

        console.log(foo()); // 8

        /* Questioln 2 what will print out */
        function foo2(){ // we have a function declaration
            var bar = function() { // we have an expression function
                return 3;
            };
            return bar(); // function expression
            var bar = function() {
                return 8;
            };
        }
        console.log(foo2()); // 3

        /* Questioln 3 what will print out */
        function foo4(){
            return bar(); // we have return an expression function before declaring will throw an error -  bar is not a function
            var bar = function() {
                return 3;
            };
            var bar = function() {
                return 8;
            };
        }



console.log("************** hositing in javascript - variables ========== ");
//* console.log(variablethatisnotdefined) // reference error- try it


// Interpreter hoisted the variable to the top of the scope
function onHoistingVariabe(){
  var helloVariable; // creation phase and variable are saved in memory with undefined.
  console.log(helloVariable); // undefined
  helloVariable = "Hello I am hosited variable and I have a value";
  console.log(helloVariable);
}
onHoistingVariabe();


console.log("************** Closures in javascript **************");
  function createFunction() {
    var name = "hello function";
    return function(){
      console.log(name);
      // inner functin has access to the outer variable name  of create function  - closures  * note debug in console to see in action.
    }
  }

  var myFunction = createFunction();
  myFunction();

 
  function changeHeading(size) {
    return function (){
       var heading3 = document.getElementById('heading_size');
        heading3.style.fontSize = size + 'px'; // closure and see how we can access size from outer variable fucntion
    };
  }

  var button_size_17 = document.getElementById('size-of-17');
      button_size_17.addEventListener('click', changeHeading(17));

  var button_size_19 = document.getElementById('size-of-19');
      button_size_19.addEventListener('click', changeHeading(19));

  var button_size_22 = document.getElementById('size-of-22');
      button_size_22.addEventListener('click', changeHeading(22));
  var current_button = document.getElementById('current_font-size');

    current_button.addEventListener('click', function(e) {
      var currentHeadingfontSize = document.getElementById('heading_size');
      var currentFont =  currentHeadingfontSize.style.fontSize = '15px';
            e.target.innerHTML = currentFont;
    });
