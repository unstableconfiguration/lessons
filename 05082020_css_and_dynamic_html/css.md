## CSS and styling  
In dynamic-html.md, we cover creating new elements including a table for our character's stats. That's all well and good, but by default everything is very bland. CSS (cascading style sheets) are what let us pretty up our documents. CSS is as frustrating as it is powerful, and mastering it often takes quite a lot of time.  
I'll easily confess not to be a master of styling. I know enough to get by and try to keep up with new techniques and best practices, but design isn't my forte. 

#### Styling an element directly 
Each element can contain an optional 'style' element. Lets say we have a HTML document with a single span: 
```
<span id='thisSpan'>Demo</span>
```
We can style it up like this: 
```
<span id='thisSpan' style='font-weight:bold; text-decoration:underline'>Demo</span>
```
The style attribute contains a string. Each style property is a name:value pair separated by a colon, and the list of style properties are separated from one another with semi-colons. 

#### Modifying style with javascript: 
The style attribute of an element can be modified via script, though there are some small nuances to this. Using our 'thisSpan' from above:
```
    let thisSpan = document.getElementById('thisSpan');
    console.log(thisSpan.style.fontWeight);
    thisSpan.style.color = 'blue';
```
The 'style' attribute gets converted to an object. So we modify its properties using dot notation (.style.property = value). The css properties are in dash-case natively, but in javascript they have to be converted to camelCase so font-weight becomes fontWeight. 

#### Modifying with CSS 
See css-demo.html and css-demo.css