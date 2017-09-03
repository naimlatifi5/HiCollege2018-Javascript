
/********************************************
*        Modules                            *
*        Destructing                        *
*                                           *
********************************************/
console.log("*************import modules ***********");
import _ from 'lodash';
console.log(_);

import {couponCodes} from './helpers';
console.log("coypo " , couponCodes);

import {throttle} from 'lodash';
console.log(throttle);

import {helloWorld} from './helpers';
console.log(helloWorld());














//     console.log("*********** From cunstructors to classes ***************");
//
//     function Person(name){
//       this.name = 'hello Person';
//     }
//     Person.prototype.displayName = function(){
//       console.log(this.name);
//     }
//
//
//     var person1 = new Person('Naim');
//     console.log(person1.name);
//
//
//     class Person1 {
//       constructor(name) {
//         this.name = name;
//       }
//       displayName() {
//        return this.name;
//       }
//
//     }
//
//    const person2 = new Person1('naim');
//    console.log('I am person ' ,person2.displayName());
//
//
//
//      class AnimalES6 {
//          constructor(name) {
//              this.name = name;
//          }
//
//          doSomething() {
//              console.log("I'm a " + this.name);
//          }
//      }
//
//
//      let lions = new AnimalES6('test1');
//      lions.doSomething();
//
//
//      console.log("*************Inheritance in ES5 vs ES6 *************");
//
//
//
//      function Employe(name, title){
//        Person.call(this,name);
//        this.title = title;
//
//      }
//
//      Employe.prototype = Object.create(Person.prototype);
//      Employe.prototype.constructor = Employe;
//      Employe.prototype.displayName = function(){
//        return Person.prototype.displayName.call(this) + this.title;
//      }
//
//      var employ = new Employe('test ', 'programmer');
//       console.log(employ.displayName());
//
//
//       class Employ1 extends Person {
//         constructor(name, title){
//           super(name);
//           this.title = title;
//         }
//         discribe(){
//           return super.displayName() + this.title;
//         }
//       }
//
//       var employ1 = new Employ1('naim', 'ES6');
//       console.log(employ1.displayName());
//       console.log(employ1.discribe());
//
//
//       console.log("**************** String methods ES5 vs ES6 *****************");
//
//       var text = "hello there string";
//       console.log(text);
//       if(text.indexOf('h') === 0 ){
//         console.log("I found the character ")
//       }else {
//         console.log("I did not find the character for you ");
//       }
//
//       // ES6
//       console.log("*********ES6 string methos ***********");
//       const text1 = "Hi thre string, where nice stuff";
//       if(text1.startsWith('x')){
//         console.log("Indeed, I found the character for you");
//       }else {
//         console.log("well, I did not find anything yet");
//       }
//
//       if(text1.includes('j')){ // checks if the string contains the character
//         console.log("we have an element chararcter");
//       }else {
//         console.log("we do not have character");
//       }
//
//       console.log(text1.endsWith('g')); // if the string ends with a character
//
//
//       // turning strings into arrays ES5
//       console.log(text1.split(''));
//       console.log(text1.split(','));
//
//       // ES6 with the use of spread operator we can turn a string to an array easily
//
//       const stringToConvert = 'I will be converted to array';
//       const convertedArray = [...stringToConvert];
//       console.log(convertedArray);
//
//       console.log("*********** = Symbols in ES6 ************");
//
//





//
//
//
//
//
//
//
//
//
//
