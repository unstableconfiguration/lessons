/* Indention: 
    As with the HTML, whenever we are within a given scopee, we add 
    indentation. In .js, instead of it being within <tags>, it is whenever 
    we are within {braces}. 
*/

let buttonAdd = document.getElementById('buttonAdd');
let buttonSubtract = document.getElementById('buttonSubtract');
let output = document.getElementById('output');

/* Style point: functions named after verbs 
    Functions do work. You know that you have a well-crafted function when the work 
    it does can be expressed succinctly in its name. There are some conventions in which 
    you indicate in the name that it is a function, but for us right now, it is good to keep 
    the name short and sweet and based entirely on what it is doing.  
*/
let add = function(a, b){
    /* What is happening here is called 'value coercion', and is an important 
    part of javascript. I'm going to write more about it in valueCoercion.js. Basically though, 
    when we add the + in front of our values, it is effectively the same as doing parseInt() */
    return +a + +b;
};

let subtract = function(a, b){
    /* The minus sign automatically coerces the values for us! Again, more of that in another file. */
    return a - b;
};

let logOutput = function(value) { 
    /* An example of a bonus function. We'll cover the whys of this another time since I want to talk 
    about value coercions and don't want to overload with information.  */
    output.value = value;
}

/* Naming scheme deviation: event handlers 
    Above, I talked about naming functions after what they do. One exception to this is event handlers. 
    When a button is clicked, the act of 'clicking' is known as an event (as seen in addEventListener). 
    When we attach a function an event, that function is then known as an event handler.  
    Think of events as being an action triggered by the user. Typical naming schemes for event handlers are 
    onEventThatHappens(). 
*/
let onButtonAddClick = function() { 
    let value = add(leftNumber.value, rightNumber.value);
    logOutput(value);
}

let onButtonSubtractClick = function() { 
    logOutput(subtract(leftNumber.value, rightNumber.value));
}

buttonAdd.addEventListener('click', onButtonAddClick);
buttonSubtract.addEventListener('click', onButtonSubtractClick);

