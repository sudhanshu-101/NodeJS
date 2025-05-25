// This file export the data from this file to another file to index.html file.


// Method 1

    // Method (i)

        const PI = 3.14;
        const g = 9.8;

        function add(a, b) {
                return a + b;
        }

        function sub(a, b) {
                return a - b;
        }

        function mul(a, b) {
                return a * b;
        }

        module.exports = {
                PI: PI,
                g: g,
                add: add,
                sub: sub,
                mul: mul,
        }


    // Method (ii)

        // export const PI = 3.14;
        // export const g = 9.8;

        // export const add = (a, b) => a + b;
        // export const sub = (a, b) => a - b;
        // export const mul = (a, b) => a * b;
        


// Method 2

        // const PI = 3.14;
        // const g = 9.8;

        // const add = (a, b) => a + b;
        // const sub = (a, b) => a - b;
        // const mul = (a, b) => a * b;

        // export { PI, g, add, sub, mul };
