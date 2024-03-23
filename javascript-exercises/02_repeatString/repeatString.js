const repeatString = function(text, numRepeats) {
    if (numRepeats < 0) {
        return 'ERROR';
    }
    
    newText = '';

    for (let i = 0; i < numRepeats; i++) {
        newText += text;
    }

    return newText;
};

// Do not edit below this line
module.exports = repeatString;
