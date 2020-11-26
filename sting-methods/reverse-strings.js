/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
//MY SOLUTION
function reverseWords(str) {
  // turns str to array
  const arr = str.split(" ");

  let reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    let reverse = [...arr[i]].reverse().join("");
    reverseArr.push(reverse);
  }
  //turns arr back to string
  return reverseArr.join(" ");
}

//found in codewars
function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

//one line chained methods
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
