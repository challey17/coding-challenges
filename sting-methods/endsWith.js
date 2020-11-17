//Complete the solution so that it returns true if the first
//argument(string) passed in ends with the 2nd argument (also a string).
// EXAMPLES //////////
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("hello", "llo")); // true

console.log(solution("hello", "yolo")); // false

//NOTES

//The endsWith() method determines whether a string ends with the characters of a
//specified string, returning true or false as appropriate.

const str1 = "Cats are the best!";

// optional paramter is length of string
//If provided, it is used as the length of str. Defaults to str.length.
console.log(str1.endsWith("best", 17));
// expected output: true

const str2 = "Is this a question";

console.log(str2.endsWith("?"));
// expected output: false
