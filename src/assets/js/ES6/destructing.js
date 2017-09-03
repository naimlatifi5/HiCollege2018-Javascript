/********************************************
*   Destructing objects ES6                 *
*                                           *
**********************************************/
 
console.log("================== Destructing objects ES6 =================");
    const personObject = {
        name: ' Naim',
        lastName: "Latifi"
      };

    // accessing property on object with destructing ES6
    let { name, lastName } = personObject;
  // what ES does here is that it assign name and lastName as variables as :
    // let name = personObject.name;
    // let lastName = personObject.lastName;
    // console.log(name1, + lastName1);

    console.log(name);
    console.log(lastName);
    // if there is no property on object that undefined is returned
    let {birthday} = personObject;
    console.log(birthday);

    // we can add parameters as in function for destructing object
    let {city  =  'Stockholm'} = personObject;
    console.log(city);

   console.log("================ Destructing arrays in ES6 ==========");

    // similar as destructing objects but we use square brackes instead []

    let myArrayData = ['1', '2', '3'];
    // destruct array object
    let [one] = myArrayData;
    console.log("Get array first element " , one);

    // get the rest of oarameters use spear operator with ...rest
    let [...rest] = myArrayData;
    console.log("get the whole array- ", rest); // [1,2,3]

    // we imported loadash from node
