const FibonacciGenerator = () => {
    let a, b, c, nth;
    a = c = 0;
    nth = b = 1;
    const next = () => {
        console.log(`f${nth++}: ${c}`);
        c = a + b;
        a = b;
        b = c;
    }
    return next;
}

let fib = FibonacciGenerator();
fib(); // f1: 0
fib(); // f2: 1
fib(); // f3: 2
fib(); // f4: 3
fib(); // f5: 5
fib(); // f6: 8