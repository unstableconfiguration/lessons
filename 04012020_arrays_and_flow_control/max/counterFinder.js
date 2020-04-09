
const vowels = 'aeiou';

/* findVowels
    For doing something like finding items in a string, the same fundamental algorithm is 
    going to be used, i.e., looping over the string, and comparing each item against one or more 
    values you are looking for. 
*/
let findVowels = function(source) {
    let foundVowels = [];

    for(let c = 0; c < source.length; c++) {
        let character = source[c]; 
        for(let v = 0; v < vowels.length; v++) {
            let vowel = vowels[v];
            if(character == vowel) { foundVowels.push(character); }
        }
    }

    return foundVowels;
}

let getItemCount = function(source, item) {
    let count = 0;

    for(let i = 0; i < source.length; i++) {
        if(source[i] == item) {
            count++;
        }
    }

    return count;
}

let countVowels = function(source) {
    let foundVowels = findVowels(source);
    let vowelCount = 0;

    for(let i in vowels) {
        vowelCount += getItemCount(foundVowels, vowels[i]); // 'vowel' has not hit semantic satiation
    }

    return vowelCount;
}

/* Derp
    You may have spotted this. The specs called for us to make use of the other two functions, 
    so that's what we're doing, but there's a simpler way to get the number of vowels.
*/
/*
    let countVowels = function(source) { 
        return findVowels(source).length;
    }
*/


let tests = function() { 
    let string1 = "soylent green is people";
    let vowels1 = findVowels(string1);
    if(!vowels1 == 'oeeeieoe'.split('')) { console.log('test1 failed', vowels1); }
    else { console.log('test 1 passed'); }

    let eCount = getItemCount(string1, 'e');
    if(eCount != 5) { console.log('test 2 failed', eCount); }
    else { console.log('test 2 passed'); }

    let vowelCount = countVowels(string1); 
    if(vowelCount != 8) { console.log('test 3 failed', vowelCount); }
    else { console.log('test 3 passed'); }

}

tests();

