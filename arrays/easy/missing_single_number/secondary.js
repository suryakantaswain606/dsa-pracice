function missingSingleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

let nums = [1, 5, 9, 0, 5, 9, 0];
console.log(missingSingleNumber(nums));
