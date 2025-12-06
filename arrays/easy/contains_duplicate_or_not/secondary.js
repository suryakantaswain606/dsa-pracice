let containsDuplicate = function (nums) {
  if (!nums.length) return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return true;
    }
  }
  return false;
};

let nums = [3, 3];
console.log(containsDuplicate(nums));
