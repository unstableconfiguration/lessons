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

let testString = "test string";
let testArray = ['a', 'b', 'c', 'd', 'e'];

let returnedString = vowelFinder(testString);
console.log(returnedString);
let returnedArray = vowelFinder(testArray);
console.log(returnedArray);