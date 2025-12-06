function find(arr1, arr2) {
  let set = new Set(arr1);

  for (let ele of arr2) {
    if (set.has(ele)) return { exist: true, num: ele };
  }
  return { exist: false };
}

let arr1 = [1, 2];
let arr2 = [6, 9, 4, 1];

console.log(find(arr1, arr2));
