//Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


function findTwoNumbersWithTargetSum(sortedArray, target) {
    let left = 0;
    let right = 1;

  while (left < right && right<sortedArray.length-1) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    }
    left++;
    right++;
  }
  
  }
  
 
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const result = findTwoNumbersWithTargetSum(sortedArray, target);
  console.log(result);
  
  