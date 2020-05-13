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
See css-demo.html and css-demo.css for some specific use-cases. Styling is a deep field, so what I have there is barely scratching the surface, but it should be enough for you to start doing your own learning and experimentation. Here's some general thoughts on CSS: 

***It's gonna suck are you're going to compromise constantly**: I have some examples of compromises in there already. My experience let me reach compromise very quick, and in some cases, my compromises are reasonably elegant even if they weren't my first choice on how to do them. The fact is, at some point, everyone ends up spending half a day anguishing over a 1 pixel thick line. You don't like the look of something, so you make an adjustment, and poof, everything else is suddenly out of alignment. It is what it is.
***Everything is relative**: Every element has a parent all the way up to the enclosing <html></html> tags that wrap the entire page up. The position and size of an element will be relative to its parent. This can cut both ways though. The height of a parent is often dependent on the height of its children. There are ways to force stuff. Height and width can be forced by explicitly setting those values, or by setting min-height, min-width, max-height, or max-width properties. At some point you will be tempted to use the 'float' css property. On the one hand, you want experience using float so you understand what it does. On the other hand, it can mess everything up, so good luck. 
***Everything is a box**: This is obvious as a statement, but in practice it is a bit of a nuanced intuition that gets built up over time. The page is fundamentally 2d, and every element is a box that occupies some finite space. As the page resizes, some things resize with it, and other things stay a fixed size. This means that the alignment and layout of things can shift around and be difficult to manage.  
The trick to keeping things lined up the way you want them is to always be putting things into containers so you can separate and consider alignment on different levels. Most pages have a 'layout' that separates the major elements (header, navigation, main content, footer, ad space, etc). Getting those major sections to line up and behave correctly is one distinct problem to solve.  
Every segment in a page layout then has to contain whatever its content is, and that's going to present its own challenges. If you are doing a data-entry form for example, you're going to have label-input pairings and you will need to consider how you want these to line up and respond to page resizes.  
Before adding anything, consider how you want things to be structured in terms of layout, both on the page and the page section level. Focus on setting up the containers and rules needed to maintain that structure. The more elements that are inside a single parent container, the more difficult it will be to get them to line up. 




