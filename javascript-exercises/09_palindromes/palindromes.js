const palindromes = function (string) {
    const cleaned_string = string.replace(/[.,!,'?\s]/g, '').toLowerCase();
    for (let i = 0; i < cleaned_string.length; i++) {
        if (cleaned_string[i] != cleaned_string[cleaned_string.length - (i + 1)]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
