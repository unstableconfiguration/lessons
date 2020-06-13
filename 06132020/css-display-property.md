
## style='display:wat'
[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 

Display is mostly about handling layout and position. Looking at the docs, there's some new specs I'm not that familiar with yet, but the stuff I am familiar with is not deprecated so we'll work with that. 

## Bread and butter stuff 
You gotta know none, block, inline, and inline-block. Fortunately they are the most common-sense ones. 

```
<div style='display:none;'>
    display none hides the element from view. you can still see it in the page html, and still access it via scripts, but it does not take up any space on the screen. 
</div>

<div id='block-container'>
    <div style='display:block;'>
        block is the default display for div elements. 
        
        it creates a rigid 2d rectangle. You can set the width and height of it, 
        or adjust its margin.

        block elements have line breaks before and after, so they won't sit side-by-side with other elements. If you are putting in <br> tags for line breaks, a block display may be more appropriate. 
    </div>
    <span>
        this text will be on a new line because the div above is a block
    </span>
</div>
<br>
<div id='inline-container'>
    <div style='display:inline'>
        inline is the default style for span elements. 
        think of 'inline' as being like 'in a line of text'. Inline elements won't let you adjust their width, height or top/bottom margins.
    </div>
    <span> 
        this text will be on the same line since the div is inline
    </span>
</div>
<br>
<div id='inline-block-container'>
    <div style='display:inline-block'>
        Inline block elements behave like block elements except they don't have line breaks before or after them. They are useful when you need the elements to be adjustable in their width and height, and also need them to be able to side side by side.
    </div>
    <span>
        this text will be on the same line since the div is inline-block
    </span>
</div>

```

Decent summary of block/inline-block/inline [here](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block). 

## More advanced stuff 
These are each things that require being learned individually. They have their own depth, advantages and quirks. I think the flexbox was introduced in around 2015, and the grid display is more recent than that.  

#### display:table;
So in the 90's people had no idea how to do page layout. One thing some folks would try would be to use a <table> element to do layout for their whole page. This is considered very poor practice. Best practice is to use <table> elements only when you have tabular data (rows, columns) to display and not for layout.  
But, sometimes you want a really rigid table-like layout. For that, display:table; does the trick. In general, you won't see this done much because of the stigma against using tables for layout. A lot of folks don't consider this to be too attractive either. But it does work.

```
    <div style='display:table;'>
        <div style='display:table-row;'>
            <div style='display:table-cell'>row one cell one</div>
            <div style='display:table-cell'>row one cell two</div>
        </div>
        <div style='display:table-row;'>
            <div style='display:table-cell'>x</div>
            <div style='display:table-cell'>y</div>
        </div>
    </div>
```

#### display:flex; / flexbox
Flexboxes were introduced to help with Responsive Web Design, which involves allowing content to gracefully be shown on differently sized screens, and to handle browser resizing more smoothly.  
A flexbox behaves like a block element, except it has a ton of extra utilities for handling page resizing and displaying content more dynamically. 

On the one hand, flexboxes are pretty empowering and do some things very gracefully that are hard to do otherwise. On the other hand, they are not the most intuitive thing to learn, and can have quirks to them as you get into more advanced stuff. I used some basic flex display on my character sheet css.

#### display:grid; 
Grids are the new hotness in page layouts. They are largely trying to recreate what is done by a library known as 'bootstrap', which more or less breaks up page content into an invisible 12-column grid for layout purposes.  
The css grid layout is more flexible than just a 12-column setup. I'm planning on experimenting with it a bit to learn more about it. 


