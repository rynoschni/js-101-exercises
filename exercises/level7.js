// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"
let num = 7;
function finalFunction() {
  let arr = [];
  for (let i = 0; i <= num - 1; i++) {
    arr.push("hello");
  }
  return arr;
}
