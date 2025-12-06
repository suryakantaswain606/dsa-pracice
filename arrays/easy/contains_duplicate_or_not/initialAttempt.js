let containsDuplicate = function (nums) {
  let obj = {};
  if (!nums.length) return false;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) return true;
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    }
  }
  return false;
};

let nums = [3, 3];
console.log(containsDuplicate(nums));
