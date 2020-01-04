/* The spread operator has the same syntax as the rest parameter, 
but the spread operator takes the Array itself and not just the arguments. 
We can use the Spread parameter to get the values of an Array, instead of using a for loop or any other method.*/
let name = ["React", "R", "Go", "JS"];
let spreadName = [...name, "SQL"];

console.log("Spread Operator ==> ",spreadName);

/*
The rest parameters are used to get the argument of an array, and return a new array.
*/

const add = (...nums) => {
  let sum = 0;
  for (let num of nums) sum += num;
  console.log("Rest Operator ==> ",sum);
};
add(1, 2, 3);
