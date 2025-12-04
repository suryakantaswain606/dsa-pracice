function missingSingleNumber(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === 1) return nums[i];
  }
}

let nums = [1, 5, 9, 0, 5, 9, 0];
console.log(missingSingleNumber(nums));
