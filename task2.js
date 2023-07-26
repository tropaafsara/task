//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] > 0) {
        sum += numbersArray[i];
      }
    }
    return sum;
  }
  

  const inputArray = [2, -5, 10, -3, 7];
  const outputSum = sumOfPositiveNumbers(inputArray);
  console.log(outputSum); 
  