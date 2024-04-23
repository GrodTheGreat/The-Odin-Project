const fibonacci = function(num) {
    num = Number(num);
    if (num === 0 ) return 0;
    if (num === 1 || num === 2) return 1;
    if (num < 0) return "OOPS";
    
    let fib = [1, 1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib.pop();
    
};

// Do not edit below this line
module.exports = fibonacci;
