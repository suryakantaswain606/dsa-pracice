let nums = [0, 1, 0, 3, 12];

// index will track the position where the next non-zero should be placed
let index = 0;

// First pass: move all non-zero elements to the front
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[index++] = nums[i]; // place non-zero at current index, then increment index
  }
}

// Second pass: fill the remaining positions with zero
for (let i = index; i < nums.length; i++) {
  nums[i] = 0; // fill the rest with 0
}

console.log(nums);
