//Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
   arr.sort();
   return arr[1];
  }
  
 
  const inputArray = [5, 2, 8, 1, 7, 3, 6];
  const result = findSecondSmallest(inputArray);
  console.log(result); 
  