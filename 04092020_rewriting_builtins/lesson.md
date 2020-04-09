# Rewriting built-ins 
Keeping the lesson lighter today since I wrote a lot on the postLesson notes of the previous one.  

Last lesson was on flow control and arrays, and I want to get more practice with that before moving on. So what we're going to do is rewrite some of the built-in array functions, and maybe come up with some of our own utility functions. 


#### Rewriting array.reduce 
We briefly used array.reduce in the post notes of the last lesson, so lets take a closer look at it. [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 
.reduce takes two parameters. The first is a 'reducer' callback function, which will execute once for each item in the array (see callback functions below). The second is an intitial value for the 'accumulator'. The reducer callback accepts up to 4 parameters. 
* The first is the value of the accumulator. It starts with the initial value we provide when calling .reduce(). It then is modified with each iteration 
* The second is the value of the current item in the array. 
* The third is the index of the current value
* The fourth is a reference to the array itself. 

The code below demonstrates it in action. We're expecting it to log 3 lines, one for each item in the array. With each iteration, it is adding the current value to the accumulator value and returning that sum. 
```
let numbers = [2, 3, 7];
let addCallback = function(accumulator, value, index, array) {
    console.log(accumulator, value, index, array);
    return accumulator + value;
}

let sum = numbers.reduce(addCallback, 0);
console.log('Sum: ', sum);
```

So lets rewrite it: 
```
// This is the rewrite, the rest is just to demonstrate that it behaves the same
let reduce = function(array, reducer, accumulator) {
    for(let i = 0; i < array.length; i++) { 
        accumulator = reducer(accumulator, array[i], i, array);
    }
    return accumulator;
}

let numbers = [2, 3, 7];
let addCallback = function(accumulator, value, index, array) {
    console.log(accumulator, value, index, array);
    return accumulator + value;
}

let sum = reduce(numbers, addCallback, 0);
console.log('Sum: ', sum);
```
Our custom reduce function is stand-alone rather than being an extension of the array, so we pass the array to be reduced to it as the first parameter. After that, everything is the same. We explicitly create the 'for' loop, we call the reducer callback with the expected parameters, and we update and keep track of the accumulator. 


#### Callback functions 
When a function is passed as a parameter to another function, it is called a 'callback' function. The idea is the main function does its work, then it can call the callback function when it is done. Below, we've written a basic divide function with an optional callback. If the callback function is not provided, it is left null and the divide function works normally. If we provide a function for callback though, it will attempt to call it with a single string parameter. 
```
    let logToConsole = function(message) { console.log(message); }
    let logToAPI = function(message) { /* code that sends a logging message to an API */ }

    let divide = function(numerator, denominator, callback) { 
        let result = numerator / denominator;
        if(typeof(callback) === 'function') { callback('Division result of ' + numerator + ' and ' + denominator + ' = ' + result); }
        return result;
    }

    divide(8, 2); // expect it to return 4, but not to log anything
    divide(4, 2, logToConsole); // expect it to return 2, and to log 2 with message
```
There's a lot of different uses for callbacks, and we'll be using more of them as we get deeper into the language. For now though, it is enough to just demonstrate how a function can be passed to another function. 