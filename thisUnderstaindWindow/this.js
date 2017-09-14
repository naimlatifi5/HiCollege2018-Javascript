console.log("Hello this ", this);
// simple function "this"
function simpleFunction() {
  console.log("In simple function", this);
}

simpleFunction();


// this with function inside object ==> window
var myObject = {
   helloThere: function(){
     simpleFunction(); // referst to window
   }
}


console.log("function inside function object " , myObject.helloThere());
var myObject2 = {

   printSomethingLater: function(){
     var that = this // work around this issue
     setTimeout(function(){
       that.somethingToPrint()
     }, 1000)
   },
   somethingToPrint: function(){
     console.log("printed after 1 second");
   }
}

myObject2.printSomethingLater();
