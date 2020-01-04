let name = ["Java", "SQL", "Python"];

// console.log(name.map(n => n + 1));

/*

| foreach                             | map                                   |
+----------------+-------------------------------------+---------------------------------------+
| Functionality  | Performs given operation on each    | Performs given "transformation" on    |
|                | element of the array                | "copy" of each element                |
+----------------+-------------------------------------+---------------------------------------+
| Return value   | Returns undefined                   | Returns new array with tranformed     |
|                |                                     | elements leaving back original array  |
|                |                                     | unchanged                             |
+----------------+-------------------------------------+---------------------------------------+
| Preferrable    | Performing non-transformation like  | Obtaining array containing output of  |
| usage scenario | processing on each element.         | some processing done on each element  |
| and example    |                                     | of the array.                         |
|                | For example, saving all elements in |                                       |
|                | the database                        | For example, obtaining array of       |
|                |                                     | lengths of each string in the         |
|                |                                     | array                                 |
+----------------+-------------------------------------+---------------------------------------+
*/

let array = [];
for (var i = 0; i < 20000000; i++) {
  array.push(i);
}
console.time("map");
array.map(num => {
  return num * 4;
});
console.timeEnd("map");

console.time("forEach");
array.forEach((num, index) => {
  return (array[index] = num * 4);
});
console.timeEnd("forEach");

console.time("for");
for (i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;
}
console.timeEnd("for");

// One thing to point out is that foreach skips uninitialized values while map does not.
var arr = [1, , 3];
arr.forEach(function(element) {
  console.log(element);
});
//Expected output: 1 3
console.log(arr.map(element => element));
//Expected output: [1, undefined, 3];
