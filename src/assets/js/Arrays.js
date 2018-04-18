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

console.log("************* Slice ******************");
myHiCollege.push('Javascript');
console.log(myHiCollege);
var mySliceArray = myHiCollege.slice(1);
console.log("Slice the array from index 1 but end not included", mySliceArray);
console.log("Original array is not modified " , myHiCollege);

console.log("************* Splice ******************");
var spliceArray = myHiCollege.splice(1,1);
console.log("Splice and remove element at position 1- ", spliceArray);
console.log("Original array is alerted", myHiCollege);

console.log("************* Filter ******************");
myHiCollege.push('Javascript');
var filteredJavascriptArray = myHiCollege.filter(function(element){
   return element === 'Javascript';
})
console.log("Original array: " , myHiCollege);
console.log("My filtered array is ", filteredJavascriptArray);

console.log("************* ForEach ******************");
console.log("Original array:", myHiCollege);
myHiCollege.forEach(function(item) {
  console.log("Looping through my array elements", item);
});

console.log("************* Reverse ******************");
myHiCollege.push('HiCollege');
console.log("Original array:", myHiCollege);
var reverseMyArray = myHiCollege.reverse();
console.log("Reversed array" , reverseMyArray);

// an examle with DOM
var template = '<ul>';

for(var i = 0; i < 10; i++) {
   template += "<li class='items'>" + i +  "</li>";
}
template += "</ul>";
// append the list to the list container
var listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = template;

// loop through the list items
var getListItems = document.querySelectorAll('.list-container li');
// needs the NodeList array to get converted to real array
// One method is to use Array.prototype.forEach.call if not used with ES6 which is [...]
var properArray = Array.prototype.slice.call(getListItems); //

// loop through all list elements
properArray.forEach(function(item, index){
   if(index === 2) {
     item.classList.add('red');
   }
   if(index === 5) {
     item.classList.add('yellow');
   }
   else {
     item.classList.add('green');
   }
});

// filter array elements with red and green color
var filteredArray  = properArray.filter(function(item){
  return item.classList.contains('red') || item.classList.contains('yellow');
})
console.log(filteredArray);
