let nums = [0, 1, 0, 3, 12];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[j - 1] = nums[j];
    }
    nums[nums.length - 1] = 0;
    i--;
  }
}
