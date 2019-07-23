// var myarr = [3,4,5,6];

// var filterme = function(arr,fn){
//    var newArray = [];
//   for(let i = 0;i < arr.length;i++){
//     if(fn(arr[i])){
//       newArray.push(arr[i]);
//       }
//     }
//   return newArray
// }

// function isEven(el){
//     return el % 2 === 0;
// }
// function isOdd(el){
//   return el % 2 ===1;
// }
// function gtTwo(el){
//   return el > 2;
// }

// function increment(el){
//   return el += 1;
// }

// filterme(myarr,increment);

var myArr = [1, 2, 4, 17, 20, 21];
var findFn = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return {
        el: arr[i],
        index: i
      };
    }
  }
};

function firstGt10(el) {
  return el > 10;
}

console.log("Greater than 10 + index of -> ", findFn(myArr, firstGt10));
