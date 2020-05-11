## Dynamic HTML 
I googled 'dynamic html' and the words are for a bit broader of a concept than we're going to cover here. This is just going to be covering some of the basic techniques to add and remove HTML elements from a HTML document using javascript. 

#### document.createElement() 
We've used the DOM (documet object model) a little bit so far, mostly in the form of document.getElementById commands. Now we get to learn some more of its functions. 

Here's a super basic demonstratio of creating and attaching a new element to a document: 
```
let span = document.createElement('span');
span.innerHTML = 'test';
document.body.appendChild(span);
```
If you paste that in your browser console and execute it, you should see the word 'test' appear at the bottom of your page. document.createElement(x) will create an HTML element of whatever type you want. Really it will create opening and closing tags for whatever value you enter. I just did the above code except it was document.createElement('wat'); and it worked fine to create <wat></wat> tags. Once you have created the element, you can modify its attributes freely.  
The document wont appear on the page until we append it do another element as a child. In the above example we used document.body, but any element works. For example, if I want to create a HTML table, I might start with HTML that looks like this: 
```
<body>
    <div id='tableContainer'></div>
</body>
```
Then some code like: 
```
    let container = document.getElementById('tableContainer');
    let table = document.createElement('table');
    // .. do stuff with table 
    container.appendChild(table);
```

#### How to build up a table using javascript: 
We're going to start simple, but there's a lot of depth to this topic. If you look at my repositories you will see one called 'gridify'. That is a small library devoted entirely to creating HTML tables automatically around data sets and is pretty light on features. In the professional world, people use similar libraries, the most common of which is called jqGrid. 

An unstyled HTML table for our stat blocks might look something like this: 
```
<table>
    <thead>
        <tr>
            <td>Ability</td>
            <td>Score</td>
            <td>Modifier</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Str: </td>
            <td>10</td>
            <td>+0</td>
        </tr>
        <tr>
            <td>Dex: </td>
            <td>20</td>
            <td>+5</td>
        </tr>
        <!-- et cetera -->
    </tbody>
</table>
```
If you haven't built tables up before, this should still make sense with looking at it for a minute. The <tr> tags are for table rows, while the <td> tags are for table cells. By setting things inside one another, we create the structure of the table.  

Now, from above where we talked about document.createElement, what we saw is that we can create any type of opening and closing tag we want. Similarly, we can apply .appendChild to any html element. Given that, we can just use those tools to create a table with few surprises. 

```
let table = document.createElement('table');

let thead = document.createElement('thead'); 
let hr = document.createElement('tr');
['Ability', 'Score', 'Modifier'].forEach(item => {
    let hc = document.createElement('td');
    hc.innerHTML = item;
    hr.appendChild(hc);
});
thead.appendChild(hr);
table.appendChild(thead);

let tbody = document.createElement('tbody');
/*  We can loop through objects similarly to arrays. In this case, it will 
    iterate through the property keys, so 'k' is 'str', 'dex', 'con', etc
*/
for(let k in yorim.stats) {
    let tr = document.createElement('tr');
    
    let statValue = yorim.stats[k];
    let statBonus = yorim.statMod(statValue);

    let col1 = document.createElement('td');
    col1.innerHTML = k
    tr.appendChild(col1);

    let col2 = document.createElement('td');
    col2.innerHTML = statValue;
    tr.appendChild(col2);

    let col3 = document.createElement('td');
    col3.innerHTML = statBonus;
    tr.appendChild(col3);

    tbody.appendChild(tr);
}

table.appendChild(tbody);

document.body.appendChild(table);
```

As you can see, it can get pretty bulky. There's techniques to trim things down, but building up a table will generally require a fair amount of code, which is why people eventually start using libraries to do the heavy lifting. 