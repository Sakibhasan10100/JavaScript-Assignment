// function cubeNumber(number) {
//     return number ** 3;
// }

// const input = prompt("Enter a number:", (3, 4));
// const num = parseFloat(input);

// if (!isNaN(num)) {
//     const cube = cubeNumber(num);
//     console.log(`The cube of ${num} is ${cube}`);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }
// Define address objects

function findAddress(obj) {
    var formatted = "";
    
    if (obj.street !== undefined) {
      formatted += obj.street + ",";
    }
    
    if (obj.house !== undefined) {
      formatted += obj.house + ",";
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
  
  // Example address objects
  var address1 = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
  };
  
  var address2 = {
    street: 10,
    society: "Earth Perfect"
  };
  
  var address3 = {
    street: 10
  };
  
  // Call the function with the example addresses and display the results
  console.log(findAddress(address1)); // Output: 10,15A,Earth Perfect
  console.log(findAddress(address2)); // Output: 10,__,Earth Perfect
  console.log(findAddress(address3)); // Output: 10,__,__ 
  