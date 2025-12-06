// Function to check if the array contains any duplicate values
let containsDuplicate = function (nums) {
  // A Set stores only unique values.
  // If nums has duplicates, the Set size will be smaller than nums.length.
  return new Set(nums).size !== nums.length;
};

let nums = [3, 3];
console.log(containsDuplicate(nums)); // true
