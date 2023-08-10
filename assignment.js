function cubeNumber(number) {
    let cube;
    cube = number * number * number;
    console.log(cube);   
}  
cubeNumber(3);
cubeNumber(4);

function matchFinder(string1, string2) {
    const regex = new RegExp(string2, 'gi');
    return string1.match(regex);
}

const inputText = ("John Doe, JavaScript, Peter Parker, Peter Parker");
const searchPattern = "ohn|Code|Pen|pet";
const matches = matchFinder(inputText, searchPattern);

if (matches) {
    console.log("Matches found:", true);
} else {
    console.log("No matches found:", false)
}

console.log(matches)

function sortMaker(arr) {
    if (typeof arr[0] === 'number' && typeof arr[1] ==='number') {
        return arr.sort((a, b) => a - b);
    } else {
        if ( arr[0] > arr [1]) {
            return [arr[1], arr[0]];
        } else {
            return arr;
        }
    }
}

const array1 = [2, 3];
const sorted1 = sortMaker(array1);
console.log(sorted1);

const array2 = [4,2];
const sorted2 = sortMaker(array2);
console.log(sorted2);

const array3 = [4,4];
const sorted3 = sortMaker(array3);
console.log(sorted3);

const array4 = [1,2];
const sorted4 = sortMaker(array4);
console.log(sorted4);

const array5 = [4,-2];
const sorted5 = sortMaker(array5);
console.log(sorted5);



function findAddress(obj) {
    var formatted ="";

    if (obj.street !== undefined) {
        formatted += obj.street + ",";
    }

    if (obj.house !== undefined) {
        formatted += obj.house += ",";
    } else {
        formatted += "__,";
    }

    if (obj.society !== undefined) {
        formatted += obj.society;
    } else {
        formatted += "__";
    }

    return formatted;
}

let address1 = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};

let address2 = {
    street: 10,
    society: "Earth Perfect"
};

let address3 = {
    street: 10
};

console.log(findAddress(address1));
console.log(findAddress(address2));
console.log(findAddress(address3));


function canPay(changeArray, totalDue) {
    let sum = changeArray.reduce(function(acc, val) {
        return acc + val;
    }, 0);

    return sum >= totalDue;
}

console.log(canPay([1,2,5], 10));
console.log(canPay([1,5,5], 10));