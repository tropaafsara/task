//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequent(arr, n) {
 
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = i; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i];
        }
    }
 
    return element_having_max_freq;
}
 
// Driver Code
 
let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let n = arr.length;
console.log(mostFrequent(arr, n));
