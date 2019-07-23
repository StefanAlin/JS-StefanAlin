// var num = 0;

// do {
//   if (num % 2 === 0) {
//     console.log("sunt par = " + num);
//   } else {
//     console.log("sunt impar = " + num);
//   }
//   num++;
// } while (num < 100);

// // var prime = 0;

// // for (var i = 0; i < 2000; i++) {
// //   prime = i / i;
// //   if (prime === 0 && prime === 1) {
// //     console.log(i);
// //   }
// // }

// basic data structure
// var undef;
// var nulex = null;
// var number = 1;
// var strings = "Stefan";

// var myArray = [undefined, null, "stefan", 1, true, alert];

// console.log(
//   typeof myArray[0] +
//     "\n" +
//     typeof myArray[1] +
//     "\n" +
//     typeof myArray[2] +
//     "\n" +
//     typeof myArray[3] +
//     "\n" +
//     typeof myArray[4] +
//     "\n" +
//     typeof myArray[5]
// );

// for (i = 0; i < myArray.length; i++) {
//   console.log(typeof myArray[i]);
// }

// var num = [5, 2, 3, 5, 6, 222, 32, 12, 2];
// var min = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (min < num[i]) {
//     min = num[i];
//   }
// }
// console.log(min);

function diff(a, b) {
  return a - b;
}

console.log(diff(10, 6));
