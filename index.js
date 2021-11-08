//Algorithm
// 1. Declare a function name averageInArray, initialized with one parameter named numbers.
// 2. Declare a variable named `average`, initialize the variable to equal 0.
// 3. Iterate over the array using a for loop to get every element in the array.
// 4. In the for loop: add every element to the `average` variable.
// 5. Use array.length() to find how many elements are in the array.
// 6. After the loop: Divide `average` by the length of the array.



//Question 1
function averageInArray(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average = average + array[i];
    }
    return average / array.length;
}
console.log(averageInArray([120, 88, 12, 4]));  //output: 56