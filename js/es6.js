 function varVsLet(){
   let x = 3;
   function func(randomize){
    if(randomize){
       var x= Math.random();
        return x;
     }
     return x;
   }
   console.log(func(false));
 }

(function (){
  var temp; // scoped inside IIFE (Immediately INVOCED function expression);
}())
//console.log(temp); // references error and not defined
{
  varVsLet();

}


console.log("============string interpolation IE5 vs IE6 and template engine  ============");

function printOutIE5(a, b ){
  console.log('a = ' + a + ' b = ' + b);
}
printOutIE5(4,3);

// IE6
function printOut(x,y){
  console.log(`${x}, ${y}`);
}
printOut(4,5);

 function templateIE6(queryElement){
   const list = queryElement;
   for(i =0; i<=list.length; i++){
      console.log(list[i]);
   }
 }
 function createButtonElement(){
   let button = document.createElement('button');
   var textNode = document.createTextNode('Show me DOM');
   button.appendChild(textNode);
   button.classList.add('myButton');
   document.body.appendChild(button);
   button.onclick = clickMe;
 }

function clickMe(){
  let listTags = document.getElementsByTagName('*');
   templateIE6(listTags);
}

console.log("============ Close ============");


console.log("============ Arrow function ============")

function IE5ArrowFunction(){
   var button = document.getElementById('static-button');
      button.addEventListener('click', function(){
        console.log(this);
        this.innerHTML = handleClick();
      });
}

function iE6ArrowFunction(){
  var button  = document.getElementById('arrow-function');
      button.addEventListener('click', (e) => {
        if(this === window){
          console.log('this has another content');
        }
        e.target.innerHTML = 'I am an arrow function'; // now this referes to the target element;
      });
}

function handleClick() {
  return "I changed the content";
}


var calculate = {
   array: [1,2,3],
   sum : () => {
     return this; // here the arrow function binds its lexical scope to a global object window
   }
}

console.log(calculate.sum());

// solution is to use function expression

var caluclateIE5 = {
  array: [1,2,3],
  sum(){ // sum is a regular function so in invocation this will refer to the object
      // loop through array
      this.array.forEach(function(i){
        console.log(i);
      })
  }
}
console.log(caluclateIE5.sum());


// arrow function on prototype methods

 function Parent(){
   this.name = 'George';
 }

 Parent.prototype.childName = () => { // here arrow function set the lexical scope to the global object
    console.log(this === window);
    return this.name;
 }

 var obj1 = new Parent();
  console.log(obj1.childName());


  function Parent1(){
    this.name = "George";
  }

  Parent1.prototype.childParent = function(){
    console.log(this); // this set content in its parent lexica scope that is object parent1
    console.log("Child's parent name =", this.name);
  }

  // instantiate the object
  var obj2 = new Parent1();
  console.log(obj2.childParent());

 // short callbacks for arrays with arrow function

   var array1 = [1,2,3];
   // loop through array with callback function
    array1.map(function(item){
      console.log('Array map with function expression' , item * item);
    });

    // short with array function
    array1.map(item =>
       console.log("Array with arrow function " , item * item));

       // for-of IE6

     let array2 = ['item1', 'item2', 'item3'];
      console.log(array2);
      array2.forEach(item => console.log(item)); // IE5 forEach

      // IE6 for-of
      for(const item of array2){
        console.log("IE6 for-of",  item);
      }

    console.log("****************** End of arrow function **************");

    console.log("**************** Default function parameters with IE5 and IE6");

    function helloThere(sayHi){
      sayHi = sayHi || 'Hello';
      console.log(sayHi);
    }

    function helloThereIE6(sayHi='Hello IE6 parameter') {
      console.log(sayHi);
    }

    var buttonSayHi = document.getElementById('say-hi');
        buttonSayHi.addEventListener('click', function(){
          helloThere('Hello there stuff');
        });

     var buttonIE6SayHi = document.createElement('button');
         buttonIE6SayHi.classList.add('say-hi-button');
         buttonIE6SayHi.innerHTML = 'Say hi with IE6 parameter';
         buttonIE6SayHi.onClick = helloThereIE6();
         document.body.appendChild(buttonIE6SayHi);


    console.log("========== Function parameters IE5 vs IE6 ===========");

    function logAllArguments(){
       for(var i=0; i<=arguments.length; i++){
          console.log(arguments[i]);
       }
       console.log("we have ", arguments.length , "arguments");
    }

    function logAllArgumentsIE6(...arguments){
       for(const i of arguments){
         console.log(i);
       }
        console.log(arguments.length);
    }
    logAllArguments('naim', 'latifi');
    logAllArgumentsIE6('test1', 'test2');

    console.log("************* Manipulation with Array IE5 vs IE6 ************");
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];
    //arr1.push(arr1,arr2); // inside arr1 we will add arr1, arr2
    // with apply we will add the context for arr1 to arr2 inside arr1
    //arr1.push.apply(arr1,arr2); // result [1,2,3,4,5,6]
    //console.log(arr1);

    // IE6 array with spread operator
    arr1.push(...arr2);
    console.log(arr1);

    // concating array with javascriot

    var arr3 = ['a', 'b', 'c'];
    var arr4 = ['d', 'e','f'];
    console.log(arr3.concat(arr4));

    // in IE6 with the use of spread function we can do like this
    const newArray = [...arr3, ...arr4];
    console.log(newArray);

    console.log("************ From object literals to methods and functions IE5 vs IE6");

    var object1 = {
      print1: function(){
        console.log('print1')
      },
      print2: function(){
        console.log('print2');
        this.print1();
      }
    }

    console.log(object1.print2());

    // IE6 has method syntax definition

    var object2 = {
      print3(){
        console.log("print 3");
      },
      print4(){
        this.print3();
      }
    }
    console.log(object2.print3());

    console.log("*********** From cunstructors to classes ***************");

    function Person(name){
      this.name = 'hello Person';
    }
    Person.prototype.displayName = function(){
      console.log(this.name);
    }


    var person1 = new Person('Naim');
    console.log(person1.name);


    class Person1 {
      constructor(name) {
        this.name = name;
      }
      displayName() {
       return this.name;
      }

    }

   const person2 = new Person1('naim');
   console.log('I am person ' ,person2.displayName());



     class AnimalES6 {
         constructor(name) {
             this.name = name;
         }

         doSomething() {
             console.log("I'm a " + this.name);
         }
     }


     let lions = new AnimalES6('test1');
     lions.doSomething();


     console.log("*************Inheritance in IE5 vs IE6 *************");



     function Employe(name, title){
       Person.call(this,name);
       this.title = title;

     }

     Employe.prototype = Object.create(Person.prototype);
     Employe.prototype.constructor = Employe;
     Employe.prototype.displayName = function(){
       return Person.prototype.displayName.call(this) + this.title;
     }

     var employ = new Employe('test ', 'programmer');
      console.log(employ.displayName());


      class Employ1 extends Person {
        constructor(name, title){
          super(name);
          this.title = title;
        }
        discribe(){
          return super.displayName() + this.title;
        }
      }

      var employ1 = new Employ1('naim', 'IE6');
      console.log(employ1.displayName());
      console.log(employ1.discribe());


      console.log("**************** String methods IE5 vs IE6 *****************");

      var text = "hello there string";
      console.log(text);
      if(text.indexOf('h') === 0 ){
        console.log("I found the character ")
      }else {
        console.log("I did not find the character for you ");
      }

      // IE6
      console.log("*********IE6 string methos ***********");
      const text1 = "Hi thre string, where nice stuff";
      if(text1.startsWith('x')){
        console.log("Indeed, I found the character for you");
      }else {
        console.log("well, I did not find anything yet");
      }

      if(text1.includes('j')){ // checks if the string contains the character
        console.log("we have an element chararcter");
      }else {
        console.log("we do not have character");
      }

      console.log(text1.endsWith('g')); // if the string ends with a character


      // turning strings into arrays IE5
      console.log(text1.split(''));
      console.log(text1.split(','));

      // IE6 with the use of spread operator we can turn a string to an array easily

      const stringToConvert = 'I will be converted to array';
      const convertedArray = [...stringToConvert];
      console.log(convertedArray);

      console.log("*********** = Symbols in IE6 ************");


      console.log("*********** Template literals ************");

      let myName = 'Naim';

      console.log(`Literal templates-Hello there template and ${myName} `);
      let string1 = 'Hello there '
      // map the array to an template literal and represent it on the DOM

      const objectArrays = [];

      const obje1 = {
        name: 'Naim',
        lastName: 'Latifi'
      }

      const obje2 = {
        name:'George',
        lastName: 'Andersson'
      }

      objectArrays.push(obje1, obje2);
      console.log(objectArrays);

      // function with tempalte IE6
      const template = name =>

       `<div>
           ${name.map(item => `
            <span>${item.name}</span>
            <span>${item.lastName}</span>
            ` ).join('')}
        </div>`;
        // create an div element
        var divElement = document.createElement('div');
            divElement.classList.add('template-literal-ie6');
            divElement.innerHTML = template(objectArrays);
            document.body.appendChild(divElement);
        console.log(template(objectArrays));

        // variable and scoping ie6
        console.log("************ Variable and scoping ***********");

        const hello = "Naim";
        //hello = "cannot change"; cannot change
        console.log(hello);

        function f(){
          const temp = 4;
          if(true){
            const temp = 123; // shadow the value
            console.log(temp);
          }
          //console.log(temp); // temp is not defined because const are scoped to the block level
        }
        f();


        function letVariable(){
          let hello = 'nice';
              hello = 'I can change and are mutable';
              console.log(hello);
           const immutable = "I cannot change";

                 //console.log(immutable);
        }

        function varInForLoop(){
          const arr = [];
          const myArray = [1,2,3];
          for(var i of myArray){
             arr.push(() => i);
          }
          console.log(arr.map(x => x())); // [3,3,3]

        }

        function letInForLoop(){
          const arr1 = [];
          const myArray1 = [1,2,3];
          for(const i of myArray1){
              arr1.push(() => i);
          }
          console.log(arr1.map(x => x())); // [1,2,3]
        }



        varInForLoop();
        letInForLoop();

        letVariable();









        // destructing objects IE5 vs IE6

        var personObject = {name: ' Naim', lastName: "Latifi"}
        console.log(personObject);
        console.log(displayObject(personObject));

        function displayObject(obj){
          var name = obj.name;
          var lastName = obj.lastName;
          return "Hello " + name + lastName;
        }


       function displayObjectIE6({name, lastName }){
         // let {name , lastName} = obj; where obj is hte parameter passed in function

         return "IE6 Mr." + name + " " +  lastName;
       }
       console.log("IE6 destructin object", displayObjectIE6(personObject));



     {
         createButtonElement();
         IE5ArrowFunction();
         iE6ArrowFunction();
     }
