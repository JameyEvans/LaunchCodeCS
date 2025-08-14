// Simple recursive function to add two numbers
function add(a, b) {
    // Base case: if b is 0, return a
    if (b === 0) {
        return a;
    }

    // Recursive case: increment a and decrement b
    return add(a + 1, b - 1);
}


// Example usage
console.log(add(5, 3)); // Output: 8