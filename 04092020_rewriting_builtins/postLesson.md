This is looking good. 

#### return, break, and continue 
Demonstrating the return, break, and continue keywords using the 'every' function.

** Return **: We already know what return does, and it is the most appropriate one for this function. The second 'return' executes, we leave the function and no further code in the function will execute. Because of this, the 'break' statement here won't execute and isn't needed. Also: If we don't return a value, it just returns NULL.
```
let every = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == false) {
              return false;
              break;
        }
    }
    return true;
}
```
** Break **: A break statement immediately exits a loop. Here's an alternate version of the same function that uses a 'break' in lieu of a return.
```
let every = function(array, callback) { 
    let isMatch = true; 
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]) == false) {
            isMatch = false;
            break;
        }
    }
    return isMatch;
}
```
** Continue **: A continue statement immediately exits the current iteration of a loop, but lets the loop continue looping afterwards. We can demonstrate this with an 'everyOther' function, which applies the callback only to values at even indices. 
```
let everyOther = function(array, callback) { 
    for(let i = 0; i < array.length; i++) {
        // skip every other iteration. The % is called the 'modulo' operator 
        if(i % 2 !== 0) { continue; } 
        if(callback(array[i]) == false) { 
            return false;
        }
    }
    return true;
}
```


#### 'truthiness' and 'falsiness' 
In javascript, we can talk about truthy and falsy values.  
[Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)  
[Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)  
We've talked about it a bit in the past, but the data type of a variable can change in javascript based on how you treat it. Falsy values are values that get treated as 'false' when you treat them as booleans. Truthy is the reverse of that. 

```
// some of the most common falsy values
let falsyValues = [false, 0, null, undefined, ''];

falsyValues.forEach(val => { if(!val) { console.log(val, 'is falsy'); } });

let truthyValues = [true, 1, 8, 'a'];
truthyValues.forEach(val => { if(val) { console.log(val, 'is truthy')} });
```

Whenever you are doing an 'if' statement and are evaluating a truthy/falsy value, we can actually skip out on using '==' or '===' for equivalency checks. For example, in our find function, we can just do 'if(callback(val))'; we don't need the == true.
```
let find = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return false;
}
```
In some ways, this is just an idiomatic javascript shortcut that saves a couple spaces. The value gets even better when you can potentially avoid situations like this, where someone is attempting to check if a string value is not null or empty
```
if(val !== null && val !== undefined && val !== '') { 
    // ...
}

if(val) {
    // we can simplify it by using truthyness
}
```




