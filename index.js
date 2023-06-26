function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // look through the rest of the pile
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum === target){
        return true;
      }
}
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
  Add your pseudocode here
*/

/*
  if the function cannot end with return true, it ends with return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
