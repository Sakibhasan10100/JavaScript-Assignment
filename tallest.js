function maxInArray(numbers){
    let largest = numbers[0];
     for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
     }
     return largest;
}

// const heights = [167, 190, 120, 165, 137, 265];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);


// let i = 7;

// if (i != 5){
// //     console.log('i is not equal to 5')
// // }

// const nayoks = ["bangla vi", "English vi", "Korean vi", "Turkish vi"];

// for ( const nayok inside nayoks ) { }
// // console.log (nayoks);

let sum = 0;

for( let i = 0; i<=3;i++){
    sum = sum + 1;
}
console.log(sum);

//fibonacci ---  0,1,1,2,3,5,8,13,21,34,55, \\