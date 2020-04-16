let every = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == false) {
              return false;
              break;
        }
    }
    return true;
}
//for testing purposes
/*   
const array1 = [12, 4, 2, 3];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(every(array1, isBelowThreshold));
*/