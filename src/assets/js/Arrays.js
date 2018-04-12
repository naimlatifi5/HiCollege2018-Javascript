var myArray = [1,2,3];
console.log("My array", myArray);

// another way of declaring arrays
var myArray1 = new Array();
myArray1[0] = 1;
myArray1[1] = 2;
myArray1[2] = 3;
console.log(myArray1);

console.log("************* push ******************");
// push - pushing an element to array
myArray.push(4);
console.log(myArray);


console.log("************* indexOf ******************");
// indexOf- finding index on an array
var myHiCollege = ['HIQ', 'HICollege', 'Javascript'];
// find index of array for HiCollege
console.log("Found", myHiCollege.indexOf('HICollege'));
console.log("Not fount because of the small letters -1 ", myHiCollege.indexOf('HiCollege'));


console.log("************* pop ******************");
// removes the last element from array
myHiCollege.pop();
console.log(myHiCollege);


console.log("************* Join ******************");
// join arrays to a string by adding a seperator

console.log(myHiCollege.join('----****----*'));

console.log("************* Concat ******************");
var newArray = myArray.concat(myHiCollege);
console.log(newArray);

console.log("************* Concat ******************");
