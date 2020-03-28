//links fields to functions in calculator.html
let buttonAdd= document.getElementById('buttonAdd');
let buttonSubtract= document.getElementById('buttonSubtract');
let output = document.getElementById('output');


console.log(document);

//handles addition button press by passing field values to addFunction and displays in output
buttonAdd.addEventListener('click', function(){
output.innerHTML = addFunction(leftNumber.value, rightNumber.value);
});

//handles subtraction button press by passing field values to subtractFunction and displays in output
buttonSubtract.addEventListener('click', function(){
output.innerHTML = subtractFunction(leftNumber.value, rightNumber.value);
});

//takes input from fields, parses to int, and returns addition of fields
let addFunction = function(a, b){
    return (parseInt(a) + parseInt(b));
};

//takes input from fields, parses to int, and returns subtraction of fields
let subtractFunction = function(a, b){
    return (parseInt(a) - parseInt(b));
};

