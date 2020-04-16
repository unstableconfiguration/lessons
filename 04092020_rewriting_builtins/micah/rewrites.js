let every = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == false) {
              return false;
              break;
        }
    }
    return true;
}

let find = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == true) {
            return array[i];
            break;
        }
    }
    return false;
}




//for testing purposes
   
//const array1 = [120, 4, 2, 3];
//const isBelowThreshold = (currentValue) => currentValue < 40;
//console.log(every(array1, isBelowThreshold));
//console.log(find(array1, isBelowThreshold));