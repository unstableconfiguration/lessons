## Assignment 
Make sure to briefly read through some of the mozilla documentation on these topics as well as the lesson itself. You don't need to memorize it all, but it is good to start getting familiar with checking documentation to learn or refresh knowledge, or to learn about new things.  

* Create a vowel finding array: 
    * It should accept a string or array as a parameter 
    * It should return a new array containing only the vowels contained in the parameter array 
* Create a item counting function
    * It should accept a string or array as one parameter 
    * It should accept a single character as a second parameter
    * It should return a count of how many times the second parameter appears in the first  
* Create a vowel counting function
    * It should accept a string or array as one parameter 
    * It should return a count of how many vowels are in the string/array
    * It should make use of the other two functions

Note: Before making modifications to an array in one of your functions, make a copy of it: 
```
let numberArray = [1, 2, 3];

let removeLast = function(array) {
    // .slice() will create a new array with all same values  
    let arrayCopy = array.slice();
    // now we can modify the arrayCopy;
    return arrayCopy;
}
```
If you don't do this, you may experience some odd behavior, which will be explained on another day!


