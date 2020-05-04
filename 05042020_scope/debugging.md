## Debugging
For the post lesson, lets talk technique. I want to focus on debugging and on protecting yourself against bugs as you go. Eventually we'll start working with tools that can help us with this, but for now we want to be as primitive as possible.

#### using our tools to identify the issue. 
If you have a bug, the first order of business is trying to isolate it. Sometimes your tools can tell you what the issue is, and exactly where it is, other times you're left guessing. 

For the issue you encountered, the browser will tell you something useful, but only if you know what you are looking for.
Let's re-introduce the issue and load it in the browser: 
```
    // I am adding the = back in here
    stats = {
```

The error I get in the console is this: 
```
SyntaxError: missing : after property id[Learn More] objects.js:8:10
```
At the end of this is 'objects.js:10:10'. That is actually giving me the precise location of the issue. It specifies the file with the issue (for when we start using multiple code files), so I open up objects.js. The 8 is the line number, so I scroll down 8 lines (it is 8 with my shorter comment). The 10 is the column since "    stats " is 10 characters before the = sign. So we have an exact address to look up the issue.

After that, I also have the [Learn More] link. The value of documentation varies a ton, but I find the Mozilla/MDN docs to be very solid. They break things down pretty granularly so that you can get a page of content just for this one issue including good and bad examples. 

A lot of this is specific to using Firefox, which may be evident in that Chrome, Edge or Safari might be less likely to provide links to Mozilla documentation, but a lot of browsers will, at minimum, try to give you the file and line number where the parser found an exception.

#### Removing code until it parses 
If our tools give us nothing or give us something nonspecific, we're on our own. In that case our first order of business is isolating the issue. 

A syntax error like this means the parser can't parse the code file and the whole document won't work. If we're going to isolate the issue, we gotta get the document to parse. The quickest and simplest way to do this is to comment out or remove everything but this: 
```
let yorim = { }
``` 
This will either work or it will fail. If it fails, we only have a tiny amount of code to check, and if it works we just move on and start adding stuff back in.
Eventually we'd hit the 'stats = { ...' bit and it would fail. So at that point we simplify it down again by emptying out stats to just a plain object.
```
let yorim = {
    name : 'yorim',
    race : 'wood elf',
    alignment : 'chaotic good',
    level : 8,
    class : 'rogue',
    stats = { }
```
By adding in and simplifying things, we can again put ourselves into a position where we only need to examine a very small amount of code to figure out the issue. We also don't need to add things in line-by-line. If we have an object with tons of properties, we can instead just add in half of them. If that fails, add in only the first 1/4, then 1/8. 

Ultimately, we're still going to have to reach the conclusion that it is the = sign that is causing the problem, which requires just knowing that that is the correct way of doing it, but we're more likely to reach that conclusion when we've stripped it down so much.

#### Using .log() statements on partially-working code. 
When the code simply does not parse, we need to just use removing and adding code to get it to parse. Often though, the code will parse just fine, but it will fail when we start to use it. In that case, we do a similar approach to above, but instead of removing lines of code, we just slap console.log() statements in it. If the code is failing hard, we will know roughly where the failing code is because the log() statements will stop working. If the code is simply returning suspect values, we can use the log() statements to track the values or the state of the program to see where they go awry.










