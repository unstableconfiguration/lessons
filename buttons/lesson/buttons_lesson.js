
// A single-line javascript comment can be made with two forward-slashes

/* Multi-line comments:
    Can be done with opening and closing tags.
*/


/* Referencing our button 
    We're going to create a variable called testButton and make it a reference 
    to our HTML input button. 
    After this, we can interact with the button through the testButton variable.
*/
let testButton = document.getElementById('test_button');

/* We can use console.log() to inspect values. 
    For complicated objects like our button reference, you can expand it in the console 
    to see all of its attributes. Go ahead and look over some of them; you should see 
    the ones we set already (id, type, value). Don't worry about learning them all.
*/
console.log('Button reference: ', testButton);

/* Document Object Model (DOM)
    The DOM is a global variable added to every page by the browser. It contains useful things 
    like the getElementById function we used to find our button above. Like the button, you can 
    expand it and look it over. Also like the button, don't worry about 99% of what you see for now.
*/
console.log(document);

/* Executing code when the button is clicked 
    We won't go too in-depth about what is happening here, but we need this as a demo to do the homework. 
    We are telling it to 'listen' for the button being clicked. When that happens, it will execute the code 
    we have provided. 
*/
testButton.addEventListener('click', function() {
    // When the button is clicked, any code in here will be executed. 
    console.log('the button has been clicked!');
    testButton.value = 'new value';
});