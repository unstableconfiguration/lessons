## Functions 
Functions are blocks of code that can be executed (called) by name. 
Sometimes they will also be called methods. There is a distinction 
between the two, but it isn't important right now.  
Functions are the building blocks of most programs, so it is 
essential we build up a good understanding of how they work. They 
also represent a bit of a leap into more abstract thinking, and can 
be a bit of a hurdle for some people when first starting out. This 
is why we're starting early with them, so that we can do a couple 
lessons drilling and building on them before moving on. 

### A basic function with no parameters and no return value
This is a very basic function to demonstrate how they are defined and called. 
We store the function in a variable named 'hello'. The ability to store functions 
in variables is something you see in .js and python; they work a little different 
in C# and some other languages.  
What is the same is how they are called. Since the function is named 'hello' we 
call it by writing 'hello()' with the open and closing parentheses. As soon as that 
happens, it will execute the code we put in the hello function, which logs a 
hello world message to the console. 
```
let hello = function() { 
    console.log('hello world');
}
hello();
```

### Parameters 
Parameters, or arguments, are values that we can pass to a function that it can 
then use when executing its code. When the function is executed, they will act like 
variables that exist only within that function. 
When we define the function, we put any parameters we want between the parentheses. 
Likewise, when calling the function, we put the values in the parentheses. They 
are passed in order, so with the 'sayMore' example, the 'a' parameter has a value of 'hello ' 
when executed, since it is the first parameter and 'hello ' is the first value we passed in. 

```
let say = function(message) { 
    console.log(message);
}
say('hello world');

let sayMore = function(a, b) {
    console.log(a + b);
}
// We expect it to log 'hello world'
sayMore('hello ', 'world');
```

### Returning values
Our above examples just executed logging statements but did no extra work. More often than 
not though, the purpose of a function is to do work and then return a value. Below is a basic 
math function for adding two numbers together. The 'return' statement defines what value is returned 
from the function. The second a return statement is executed, the function exits.  

```
let add = function(a, b) { 
    return a + b;
}

let six = add(4, 2);
console.log(six);
```

### Returning to our buttons lesson 
We used functions in the buttons lesson, though at the time we didn't go into what they were. 
You can see the syntax to define the function in there though, with the opening and closing parentheses, 
and the opening and closing braces. 
```
let testButton = document.getElementById('testButton');
testButton.addEventListener('click', function() { 
    testButton.value = 'clicked';
});
```
With what we covered today, we can now change that up a bit
```
let testButton = document.getElementById('testButton');
let onTestButtonClicked = function() {
    testButton.value = 'clicked';
}
testButton.addEventListener('click', onTestButtonClicked);
```
In both cases, a function is called when the testButton is clicked. In the first example, 
the function is an 'anonymous function' because it does not have a name. In the second case, 
we defined and gave it a name, which we provided when setting up the 'click' event listener. 


## Homework: Build a simple add/subtract calculator. 
Create a simple two-button calculator. We'll have two textboxes for inputting two numerical 
values. We will have add and subtract buttons. And we will have a span to display the results. 
At minimum, have the addition and subtraction operations handled by suitably named functions.  
As a bonus, have named functions for other aspects of the program like: 
* Handling the click events 
* Setting the output value
* Retrieving the input values.

**UI**
* Create a 'calculator.html' document.
* Give it two <input> fields of type='text' and ids of 'leftNumber' and 'rightNumber'
* Give it one <input> field of type='button' and a value of '+' and an id of 'buttonAdd'
* Give it one <input> field of type='button' and a value of '-' and an id of 'buttonSubtract'
* Give it one <span> field with an id of 'output'
* When the user presses the '+' button, add the values in the leftNumber and rightNumber fields and display the result in the 'output' span. 
* When the user presses the '-' button, subtract the value of the rigthNumber field from the leftNumber field and display the result in the 'output' span.

**.js**
* Create an add function that accepts two parameters, adds them together, and returns the result. 
* Create a subtract function that accepts two parameters, subtracts one from the other, and returns the result. 


Note: <span> fields don't have a .value property. To display text in the output span, use .innerHTML instead.
```
let output = document.getElementById('output');
output.innerHTML = 'output value';
```