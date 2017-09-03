// this in global context

    console.log(window.this); // since ES6 and babel has the module this to undefined. if we have script without babel we will have window as global context

    // "this" in object construction

    function Person(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }


    let person = new Person('Naim', 'Latifi');
    console.log(person.name); // this.name
    console.log(person.lastName);

    // "this" in an object

    let myObjectWithThis = {
       greeting: 'hi',
       sayHi: function(){
         console.log(this.greeting); // "this" in object refers to the object itself
       }
    }
    console.log(myObjectWithThis.sayHi());


    // "this" in simple functions

    function simpleFunctionWithThis(){
      console.log(this); // refers to window but as we are using babel it modules are boundled to undefined- se example outside src element
    }

    simpleFunctionWithThis(); // refers to window


    var myObject2 = {

       printSomethingLater: function(){
         var that = this // work around this issue
         setTimeout(function(){
           that.somethingToPrint()
           //this.somethingToPrint(); // undefined typeError this.Ssomething... is not defined
         }, 5000) //after 1 second
       },
       somethingToPrint: function(){
         console.log("printed after 1 second");
       }
    }
    console.log("something to print with delay" , myObject2.printSomethingLater());


    // "this" in event listener

    var getButtonById = document.getElementById('myButton');
        //getButtonById.addEventListener('click', function(){
        //  console.log(this); // this refers to the button itself
        //});


function listenToElementClick(element){
  return {
     listenToClick: function(){
       var that = this;
       element.addEventListener('click', function(){
         console.log("what is ", that);
         that.speak();
       });
     },
     speak: function(){
       console.log("this function inside eventListener");
    }

  }
}
listenToElementClick(getButtonById);
