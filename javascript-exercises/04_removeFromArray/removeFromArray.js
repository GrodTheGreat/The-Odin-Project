const removeFromArray = function(array) {
    for (let arg in arguments) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arguments[arg]) {
                array.splice(i, 1);
            }
        }
    }

    return array;
 };

// Do not edit below this line
module.exports = removeFromArray;
