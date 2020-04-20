## Objects 
There's a whole lot more we can say about functions and flow control. Some of it is just small details and options that we can cover piecemeal as we go, and some of it may be advanced stuff we will revisit at a later time. Objects have a similar depth, so we're going to try to cover the basics over a couple lessons, and then gradually get into more depth and nuance over time. 
[Mozilla docs on 'Object Basics'](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

Lesson.js in this folder contains demonstrations of building up a basic object. Take a look at that if you haven't already.

One use for objects is to package related things together. In the lesson.js example, the object is 'max', and all of its data is related in that sense. It does not just have to be data though. In the last lesson we were writing array utility functions.  
Supposing we ended up writing a ton of similar utility functions and we wanted to pass them around for use throughout a project or even distribute them to other people to use. In that case we would bundle them up in an object. We'd typically call a collection of utilities like that a library.

```
// clever names are the cornerstone of a good library.
let ra = { 
    sum : function(arr) {
        // ...
    },
    filter : function(arr, callback) {
        // ...
    }
}

let summed = ra.sum([2, 5, 9]);
```






