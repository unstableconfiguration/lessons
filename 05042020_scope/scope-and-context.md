## Scope and context
Though they are different concepts, I wanted to do scope and context together, and needed to do objects before starting on context. There's a good chance you have encountered scope in other lessons before, and I saw you using 'this' already in your object, so you're started on context.

## Scope
[Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
Scope is all about where variables can be accessed. We can have variables accessed throughout the entire application, down to ones contained within the braces of an if statement. 

#### Global scope
Variables in the global scope are accessible throughout an entire application. For browser javascript, that's going to mean they are accessible to any code that runs on the current browser tab. A lot of the variables we've written so far have been in the global scope by default.  
When add a file like objects.js from the last lesson, the 'yorim' variable is a global variable. As soon as we load that .js file, we can access it by typing in something like 
``` console.log(yorim); ``` 
in the browser console. Similarly, if we were to load up another javascript file, it would be able to access the yorim variable. 

As a general practice, we want to limit using the global scope. There's a couple reasons for this.  

* Globals weaken intellisense. If you open objects.html and just type 'yorim' in your console the autocomplete suggestions will mostly be that object's properties. If, on the other hand you just type 'a' and let it autocomplete, you are going to see lots of default options provided by the browser. The more we keep things grouped up rather than in the global scope, the more effectively we can use intellisense to navigate options.  
* Globals can confuse other devs. If you write a utility function and put it in the global scope, then use it elsewhere in another application, another dev may confuse it for a built-in function. They may then waste time trying to look up documentation for it, or trying to use it in a different context.  
* It increases the chance of things getting overwritten. If I put my own character sheet 'pepper' in the global scope, then import, lets say, an encryption library that puts a function called 'pepper' in the global scope, then my character sheet gets overwritten by that function. 
* Logical grouping helps things make sense. If we were to build up a robust D&D library with multiple character sheets. Seeing something like 'dnd.characters.yorim.class' will start to make more sense and be more clear than just 'yorim.class'.

We'll soon cover other techniques that can help us limit using the global scope and pretty soon we may start playing around with 3rd party libraries that will let us see how they use scope. 

#### Local scope 
Any variable that is not in the global scope is usually said to be in the 'local' scope. Local variables can also sometimes be called 'function' variables since they will have to be contained inside a function to not be global. 
```
var global = 'global variable, accessible anywhere'
var fn = function() {
    var local = 'local variable, accessible only within the braces of fn';
    console.log(local); 
    console.log(global);
}
console.log(local); // Should give us a 'local is not defined' error
console.log(global);
```

#### Control scope 
A minor twist on the local variable is the 'let' vs 'var' keywords and variables within flow control statements (if statements, loops). If you define a variable within the braces of an if statement (or a loop) using 'var', it is accessible elsewhere in the function. if you use the 'let' keyword, the variable acts like it is local to the if statement.

var: 
```
var fn = function() { 
    if(true) { 
        var localVar = 'local variable with var keyword';
    }
    console.log(localVar); // localVar is accessible here,
}
```
let: 
```
var fn = function() { 
    if(true) { 
        let localLet = 'local variable with let keyword';
    }
    console.log(loalLet); // localLet is not accessible here
}
```
This is a bit obscure and shouldn't ever really matter. Best practice is to treat any opening and closing braces as their own scope. In my personal projects I tend to prefer using the 'let' keyword since it is by default more restrictive, but some versions of IE/Edge have quirks regarding it so professionally I've always used 'var'. 


#### Closures 
.... damn, I'm writing more than I wanted to. I'm going to cover closures on a 'objects part 2' lesson. 


#### Accidental global scope
Small thing, but if you ever define a variable without using var, let, or const, it will automatically get popped to the global scope. 
```
let fn = function() { 
    test = 'testing';
}
fn();
console.log(test); // oops, we accidentally put test in the global scope
```
This also happens with loop variables 
```
for(i = 0; i < 100; i++) {
    //...
}
console.log(i); // oops, i is global now
```

## Context
[Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
You already used 'this' in your yorim object, so you have an introduction to context. If you open your browser console and just type 'this', the default context is 'Window'. Generally, every function has a hidden 'this' variable referencing the object that contains it. Just as the default context is the Window, the default 'this' of a globally scoped function will be Window.  
This isn't a 100% thing, but if a function is goin to access its context, I generally advise assigning it to a well-named variable first. This is mostly to avoid confusion as you can run into situations where 'this' is ambiguous, and a well named variable clears that up. 

This is a bit of an advanced technique and isn't something that you use too often, but you can also forcibly change the context of a function using .bind;
```
let me = {
    name : 'max'
}

let sayName = function() { 
    console.log(this.name);
}

sayName(); // undefined, 'this' is the window which has no .name value
sayName.bind(me)(); // max
```
I used .bind recently for something, I think it was for adding an event listener to a control but I can't find it for a live example. 


 

