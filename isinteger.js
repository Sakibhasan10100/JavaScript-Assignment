// function isinteger(x){
//     if (typeof x !== 'number'){
//         return 'Provide me a isinteger number'
//     } else if (x % 1 == 0){
//         return 'true';
//     } else{return [false]}
// }
// console.log(isinteger,(5));


// function isInteger(x) {
//     if (typeof x !== 'number') {
//         return 'Provide me a valid number';
//     } else if (x % 1 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isInteger(10));

function isinteger(x) {
    if (typeof x !== 'number') {
        return 'Provide me a valid number';
    } else if (x % 1 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isinteger(6));

// function isinteger(x, y) {
//     if (Number.isInteger(y / x)) {
//       return 'please provide me a isinteger number';
//     }
//     els
//   }
  
//   console.log(fits(5, 10));
  
//   console.log(fits(5, 11));
