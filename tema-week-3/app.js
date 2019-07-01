//play with array

var array = [];
var newArray = [2, 2, 2, 2, 2];
var obj = { nume: "Stefan", prenume: "Dascalescu" };

for (var i = 0; i <= 50; i++) {
  array.push(i);
}
//append object to array
array.push(obj);
//append newarray to array
array.push(newArray);
//inser 89 at index 1
array.splice(1, 1, 89);
//print the first element 10 elements of the array
console.log(array.slice(0, 10).join(", "));
//slice and join creates a different array and joins every element wih , .
console.log(array);

// funcion to truncate

var truncate = function(myString, num) {
  if (myString.length <= num) {
    myString.slice(0, num);
    return myString.join("...");
  }
};

console.log(truncate("stefan", 3));

// nu merhe, si nu am internet sa pot investiga cum trebuie, las asa si recuperez cand ma intorc din vacanta.
