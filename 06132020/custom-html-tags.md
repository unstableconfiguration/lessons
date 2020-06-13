## <customtags>
Creating custom tags like <charmetaleft> isn't something you necessarily should avoid, but you may want to walk back how you are doing it right now.  

It's good to have the intuition that your custom tag is fundamentally just a <div>. Beyond that, every tag is just an HTMLElement at its heart, but each tag then extends that behavior with behavior specific to the new tag name.  
That sort of gets to what you should be considering when thinking about using a custom tag name. Each tag has an intended purpose, and any special behavior it has should be related to that. It's worth checking up the documentation for some of the tags to get a sense for them.  
[div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) tags are very generic in their purpose, but mostly are about dividing up and containing content.  
[label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) tags are much more specific, in that they only make sense when paired with an <input> tag.  

So you want to be mindful of the purpose of a tag, both when using them and when considering creating a new one. The use of a tag indicates to anyone reading the code what it is intended to be doing.  
In your code, it looks like your custom tags are just being used as identifiers. For that, we already have something: 
``` id='charmetaleft' ```

Side note: There are some frameworks like angular, or react that use tags in a slightly different ways. We'll cover at least one of these frameworks at some point because it's a very relevant skill to have. 