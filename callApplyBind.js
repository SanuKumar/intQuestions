var obj = {
  num: 2
}

var addToThis = (a,b,c) => {
  return obj.num + a + b + c;
}

console.log("Call --> ",addToThis.call(obj,1,2,3)) // 8 //use call()/apply() to invoke the function immediately. Here we pass object as argument, with this contex.

var arr = [1,2,3];
console.log("Apply --> ",addToThis.apply(obj,arr)) // 8 //use call()/apply() to invoke the function immediately. Here we pass array as argument,with this context.
 
console.log("Bind --> ",addToThis.bind(obj,arr)) //bind return function that has ability to execute this

var bound = addToThis.bind(obj,arr)

console.dir(bound(1,2,3));


/*
One of the key requirements of redux is that each reducer must be pure. 
That is given a state and an action it should always give a new state but not mutate the existing one.
*/


//Immutable JS
//Data encapsulated in immutable JS is never mutated and always a new copy is returned.