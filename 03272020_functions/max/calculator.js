/* Indention: 
    As with the HTML, and with most languages, whenever we are within a given scope, 
    we add indentation. In .js, instead of it being within <tags>, it is whenever 
    we are within {
        braces
    }. 
*/

let buttonAdd = document.getElementById('buttonAdd');
let buttonSubtract = document.getElementById('buttonSubtract');
let output = document.getElementById('output');

/* Style point: verb function names
    Functions do work. You know that you have a well-crafted function when the work 
    it does can be expressed succinctly in its name. In a very simple function, this 
    could be as simple as a single verb (add, subtract). In more complex functions, you can 
    still base the name around a verb (sendEmails, cancelRequest).  
*/
let add = function(a, b){
    /* What is happening here is called 'value coercion', and is an important 
    part of javascript. I'll cover this in another document. */
    return +a + +b;
};

let subtract = function(a, b){
    /* The minus sign automatically coerces the values for us! Again, more of that in another file. */
    return a - b;
};

/* Naming scheme deviation: event handlers 
    Above, I talked about naming functions after what they do. One exception to this is event handlers. 
    When a button is clicked, the act of 'clicking' is known as an event (as seen in addEventListener). 
    When we attach a function an event, that function is then known as an event handler.  
    Think of events as being an action triggered by the user. Typical naming schemes for event handlers are 
    onEventThatHappens(). 
*/
let onButtonAddClick = function() { 
    let value = add(leftNumber.value, rightNumber.value);
    output.value = value;
}

let onButtonSubtractClick = function() { 
    output.value = subtract(leftNumber.value, rightNumber.value);
}

buttonAdd.addEventListener('click', onButtonAddClick);
buttonSubtract.addEventListener('click', onButtonSubtractClick);

