// This file import the data of another file math.js


// Method 1

        const { PI, g, add, sub, mul } = require('./math.js');

        console.log(`PI = ${PI}`);
        console.log(`G = ${g}`);
        console.log(`Sum = ${add(23, 34)}`);
        console.log(`Subtraction = ${sub(23, 34)}`);
        console.log(`Multiplication = ${mul(23, 34)}`);
        


// Method 2

        // import { sum, mul, PI, g } from "./math.js";

        // console.log(`The value of the PI = ${PI}`);
        // console.log(`The value of gravity = ${g}`)
        // console.log(`The sum of (23,34) number are = ${sum(24, 34)}`);
        // console.log(`The multiplication of (12,23) numbers are = ${mul(12, 23)}`);


