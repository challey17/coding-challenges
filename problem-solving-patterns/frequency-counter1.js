// Write a function same which accepts 2 arrays.
//the function should return true if every value in the array
// has it's corresponding value squared in the second array. The frequency of values
//must be the same.
//order doesn't matter

//EXAMPLES

// same([1,2,3], [4,1,9]) // true
// same([1,2,1], [4,1,]) // false, must be same frequency

// NESTED LOOP SOLUTION
function same(arr1, arr2) {
  // if array lenghts aren't equal, cannot be true
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if equals -1 that means not in array, so false
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    //splice, first param is starting index to change array,
    // second param is how many items to delete
    // i.e remove 1 item from correctIndex
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//NOTES
// The indexOf() method returns the first index at which a given element
//can be found in the array, or -1 if it is not present.

// O(n^2) -- bc nested loops, indexOf is a loop
