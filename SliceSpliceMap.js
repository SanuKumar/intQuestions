// Slice ( )
// Copies elements from an array
// Returns them as a new array
// Doesn’t change the original array
// Starts slicing from … until given index: array.slice (from, until)
// Slice doesn’t include “until” index parameter
// Can be used both for arrays and strings

// Splice ( )
// Used for adding/removing elements from array
// Returns an array of removed elements
// Changes the array
// For adding elements: array.splice (index, number of elements, element)
// For removing elements: array.splice (index, number of elements)
// Can only be used for arrays

// Split ( )
// Divides a string into substrings
// Returns them in an array
// Takes 2 parameters, both are optional: string.split(separator, limit)
// Doesn’t change the original string
// Can only be used for strings

var arr = [1, 2, 3, 4, 5];

arr.splice(2, 0, 34, 23, 34, 45, "sanu");

console.log(arr);

var arr1 = ["sanu", "kumar", "sata", "rs", "as"];

console.log(arr1.splice(2, 3));

let sa = arr1.slice(2, 3);
console.log(sa);
console.time("sede", 'split');

console.log(arr1.toString().split(",", 3)); //string.split(separator, limit);
