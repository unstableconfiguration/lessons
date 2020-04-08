let vowelFinder = function(source){
    let returnedVowels = [];
    for(let i = 0; i <= source.length-1; i++) {
        //console.log(source[i]);     //for troubleshooting incrementation
        if (source[i] == 'a' || source[i] == 'e' || source[i] == 'i' || source[i] == 'o' || source[i] == 'u') {
            returnedVowels.push(source[i]);
        };
    };
    return returnedVowels;
};

//let testString = "test string";
//let testArray = ['a', 'b', 'c', 'd', 'e'];

//let returnedString = vowelFinder(testString);
//console.log(returnedString);
//let returnedArray = vowelFinder(testArray);
//console.log(returnedArray);

let itemCounter = function(source, term) {
    let itemCount = 0;
    for(let i = 0; i <= source.length-1; i++){
        if (source[i] == term){
            itemCount++;
        }
    }
    return itemCount;
};

//let x = itemCounter(testString, 't');
//console.log(x);
//let y = itemCounter(testArray, 'b');
//console.log(y);

let vowelCounter = function(source){
    let vowelArray = vowelFinder(source);
    let vowelCount = itemCounter(vowelArray, 'a') + itemCounter(vowelArray, 'e') + itemCounter(vowelArray, 'i') + itemCounter(vowelArray, 'o') + itemCounter(vowelArray, 'u');
    return vowelCount;
};

//let z = vowelCounter(testString);
//console.log(z);