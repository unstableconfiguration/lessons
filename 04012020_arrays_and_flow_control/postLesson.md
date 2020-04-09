# Post-lesson notes
Good stuff, you stuck to the specs and the code you wrote is sensible and direct. I've got a lot of different things I could talk about, I'm going to pick one or two, and we're going to end up doing an assignment that keeps building on these same skills. 


## 10 different ways of doing anything. 
In programming, there's always multiple paths to the solution. Often there will be some without clear advantages over others, but there are almost always trade-offs between methods.  
I wanted to show some alternative ways of writing some of the functions from the assignment so that we can explore some of the available options. You don't need to learn every new technique used here, though each will be learned eventually. We are going to hit peak semantic satiation on the word 'vowel' by the end of this.

#### nested loops findVowels(source)
For the basic challenge of 'find all vowels in a string', the fundamental algorithm will be the same: loop through the input string, and compare each character against all vowels. You did the comparison using a chain of || statements, which is direct and efficient, but a bit bulky to write. So here is it with just two loops 

```
let findVowels = function(source) { 
    let foundVowels = [];
    let vowels = 'aeiou';

    for(let i = 0; i < source.length; i++) {
        for(let v = 0; v < vowels.length; v++) {
            if(source[i] == vowels[v]) { 
                foundVowels.push(source(i));
            }
        }
    }

    return foundVowels;
}
```

#### Using string.includes  
Discovering whether a string contains a substring is an incredibly common job. Often, language designers will add utility functions to handle some of the most common things. In .js, strings have an 'includes' extension function which checks the string for a substring.
```
'abcde'.includes('bc'); // this evaluates to true;
```
So we can use that to automatically handle our inner loop. 
```
let findVowels = function(source) { 
    let foundVowels = [];

    for(let i = 0; i < source.length; i++) {
        if('aeiou'.includes(source[i])) {
            foundVowels.push(source[i]);
        }
    }

    return foundVowels;
}
```

#### Using array.reduce(callback, output);
Arrays have several functions which can loop over the array, and possibly mutate it, or extract values from it. 
[JS Array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) -- Look for 'iteration methods'
Reduce will loop over the array and execute a function on each item in the array, and will output a value that is based on the combined executions of the function. 

```
let findVowels = function(source) { 
    return Array.from(source).reduce(function(acc, value) {
        if('aeiou'.includes(value)) { acc.push(value); }
        return acc;
    }, []);
}
```
At this point, some of the trade offs we are making become more clear.  
On the one hand, we're taking up less space. We'll eventually talk about 'clean code' and the benefits of keeping things tidy, but for now just know that taking up less space is often desirable.  
On the other hand, this will be less readable for most folk. It uses several built-in functions (Array.from, .reduce(), .includes), so it requires increasing knowledge of the language. It also requires a bit more mental translation to read. If describing this, I would not say 'it then reduces the array'. I would instead say something more like 'it loops over the values in array, checks if the value is a vowel, and adds it to an output array'.  
Overall, the tradeoff is not huge at this point. The readability hit is going to be hardest for anyone not familiar with things like .reduce(), but that is a fairly fundamental tool and so it is acceptable to want devs to be familiar with it. On the other hand, we're only saving about 3-5 lines of code, so its nickles and dimes all the way down. 

#### You can almost always get more terse 
'Code golfing' is the act of trying to get your line and character count down as low as possible for the same functionality, which can be a fun game to play. The code below isn't as terse as we can get, but it uses a couple techniques to trim it down noticeably. We'll cover those techniques another time and may do some code golf on a later assignment to play around.
```
let findVowels = (s) => Array.from(s).reduce((a, v) => 
    'aeiou'.includes(v) ? a.concat([v]) : a
, []);
```
I've completely jumped the shark on readability here though and this code would usually get rejected during peer review. 

#### Using regular expressions  
Regular expressions ("regex") are a tool for pattern matching and string parsing. They are pretty ubiquitous in that many languages contain regex tools. They can be really powerful, but are also one of the fastest ways for a dev to write unreadable code. 
```
    let findVowels = function(source) { 
        return source.match(/[aeiou]/g);
    }
```



