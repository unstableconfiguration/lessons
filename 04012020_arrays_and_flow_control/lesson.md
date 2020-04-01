## Arrays and Flow Control
In many tutorials, you start with data types into flow control into arrays, then into 
functions and classes. I wanted to actully push functions first since I consider them 
more complex, and then work backwards for a couple lessons to let them sink in.  

### Arrays  
Arrays are a data type in Javascript and other languages. What they do is hold a collection of other values. For example, an array of integers might look like this: 
```
let numberArray = [1, 2, 5, 3];
```
Items in an array are accessed by their 'index', or their position in the array. Arrays in .js start at 0, so we can access the first value with the 0 index, the second with the 1 index and so on.
```
let one = numberArray[0];
let five = numberArray[3];  
```
Arrays contain a ton of utility functions that let you manpulate the array (change its values) or perform complicated operations involving all the items in the array. I recommend getting used to checking the online documentation about them: [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).  
For now, lets cover push and pop.  
```
// Here, we initialize the array, but it has no items. 
let letterArray = []; 
// .push(item) adds elements to the array. 
// Each item is added to the end of the array, so our array now looks like ['a', 'b'];
letterArray.push('a');
letterArray.push('b');
//.pop() removes an item from the end of the array and returns it as a value
let b = letterArray.pop();
letterArray.push('c');
letterArray.push('b');
// letterArray now looks like ['a', 'c', 'b'] since we removed the b, added the c, then added the b again
```

### Flow Control  
Flow control refers to key words that change how the program executes. The most basic example is an 'if else' statement.
[Mozilla Flow Control](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling). We won't be doing error handling for a while, but everything else on there is useful. 

```
// Math.random() creates a random number between 0 and 1
let randomFloat = Math.random();
if(randomFloat > .5) { 
    console.log('first block executed');
}
else { 
    console.log('second block executed');
}
```
With this example, the idea of 'flow control' may make more sense. By default, code executes top-to-bottom, line-by-line. This order of execution is what we mean by 'flow'. With the if-else statement, we see that the flow will end up skipping one of the two lines depending on the value of the random number.  

#### Loops: 
Loops are one of your most essential types of flow control. The most classic loop is the 'for' loop. 
[Mozilla Documentation on the for loop](https://www.w3schools.com/js/js_loop_for.asp)
```
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```
If you run the above code in your browser console, you will see it count from 1 to 10. To create this loop, we do three things.  
* We declare a variable i and set it equal to a value 1  
* We set a condition to continue the loop. In this case, we are saying "continue the loop as long as i is less than or equal to 10", meaning the loop will stop as soon as i is equal to 11. 
* We create a statement sometimes called the 'iterator'. It is a bit of code that executes at the end of each loop. In this case, we add 1 to i.  

We have a lot of freedom with what we do with the loop, including the ability to get ourselves into trouble. 
```
for(let counter = 1; counter < 100; counter++) { 
    // we can name the variable anything. 'i' is a common one for saving space, but sometimes you want something more descriptive
}

for(let i = 0; i < 10; i--) {
    // we can accidentally create an infinite loop. Here, we accidentally set our third statement to subtract 1 from i rather than add. Because of this, we i will never get bigger than 10 and we will run forever counting from 0 to -infinity. 

    if(i < -1000) {
        // we can use the 'break' statement to exit the loop regardless of the value of i,
        break;
    }
}

for(let evens = 0; evens < 101; evens += 2) {
    console.log(evens);
    // we can adjust our iterator to change how we count
}
```


