## Value Coercion
No homework for this one other than to read this and to run some of the commands in your browser console to test them. 

### Static vs Dynamic typing
Javascript is a dynamically typed language, which means that a variable can hold any data type at any given time. 
```
    // a is now an integer
    var a = 1; 
    // a is now a string
    a = 'hello world';
    // a is now a flow
    a = 1.1
```

This can be compared to a language like C#, which is a statically typed language. In static languages, a variable is assigned a value type at creation, and it can only ever hold that type of value. 
```
    // a is now an integer, which in C# means it is a whole number between roughly -2^31 and 2^31
    int a = 1;
    // This won't build
    a = "hello world"
    // this won't either
    a = 1.1;
```

Each data type (integer, float, decimal, string, array, object) can have different requirements for storing it in memory. Statically typed languages can be more memory-efficient since they know the data type and can select the correct memory allocation. Dynamic languages tend to be more greedy, since the program will have to either allocate more memory for any given variable, or be prepared to do so on the fly. In exchange, dynamic languages offer a lot of freedom of expression, which can simplify development. 

### Value Coercion 
What dynamic typing means for javascript is that at any given moment, it has to do its best job of guessing what a data type of a variable is. Put another way *how you use* a variable determines how it is treated by the language.  

Basic math happening: 
```
var a = 1;
a + 2; // expected outcome: 1 + 2 = 3
```
Number + number = addition.

Implicit coercion: 
```
var a = 1;
a + '2'; // expected outcome: '1' + '2' = '12'
```
2 is a string due to its quotation marks. Number + string makes no sense, so it converts a into a string so that it is string + string = concatenation.

Implicit coercion part 2: 
```
var a = 1;
a - '2'; // expected outcome ?
```
String - string makes no sense, so it converts '2' into a number so that it is number-number. This more or less translates into "1 + parseInt('2')".

Explicit conversion: 
```
var a = '1';
var b = '2';
parseInt(a) + parseInt(b); // expected outcome: 1 + 2 = 3
```
Here, we started with two strings. We explicitly told javascript to treat them as integers, so it did its best, and it gave us 3.

Explicit coercion part 2: 
```
var a = '1';
var b = '2';
+a + +b; // expected outcome: 3 (wat?)
```
So what happened here? '+a' is javascript shorthand for 'treat a as a number'. "+a" and "parseInt(a)" are interchangeable. There are a couple of these shorthand operations and we will cover some others as we go, but these are the most common: 
```
// for any variable a
+a; // treats a as a number 
!a; // treats a as a boolean
''+a // treats a as a string
```


