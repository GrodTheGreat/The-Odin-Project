const sumAll = function() {
    let min;
    let max;

    if ((typeof(arguments[0]) != 'number') || (typeof(arguments[1]) != 'number')) {
        return 'ERROR';
    }

    if ((arguments[0] < 0) || (arguments[0] < 0)) {
        return 'ERROR';
    }

    if (arguments[0] > arguments[1]) {
        min = arguments[1];
        max = arguments[0];
    } else {
        min = arguments[0];
        max = arguments[1];
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
