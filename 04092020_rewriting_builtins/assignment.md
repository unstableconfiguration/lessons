## Rewriting some functions  
Lets write some array utility functions. Some can be rewrites of built-in array functions, but we can do some others. I'm going to go into more detail for the specs on the first one, but after that, part of the assignment is reading the documentation.

* rewrite [array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* rewrite [array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* create a sum function that returns a number that represents all the items in the array added together
    * it returns a number that represents all items in the array added together
* create a filter function based on [underscore.js](https://underscorejs.org/#filter)

#### rewrite array.every()
* Create a function called 'every' 
    * It should accept two parameters 
        * The first parameter will be an array 
        * The second parameter will be a callback
    * It should return a boolean true/false value. 
    
'every' will loop over the array. For each item in the array it will call the callback function, passing in the current value, the current index, and the array itself. The callback will return a true or false value. 'every' will return true if the callback returns true for every item in the array. 'every' will return false if the callback returns false for any item in the array. 




