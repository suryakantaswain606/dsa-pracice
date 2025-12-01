// Two sorted input arrays
let list1 = [1, 2, 3, 7, 0, 0, 0];
let list2 = [2, 5, 6];

// Output array where we will store the merged sorted result
let merged = [];

// Pointers to track positions in list1 and list2
let pointer1 = 0; // index for list1
let pointer2 = 0; // index for list2

// Total number of elements in the merged array
let totalLength = list1.length + list2.length;

// Loop exactly totalLength times to fill the merged array
for (let writeIndex = 0; writeIndex < totalLength; writeIndex++) {
  if (
    pointer2 === list2.length ||
    (pointer1 < list1.length && list1[pointer1] <= list2[pointer2])
  ) {
    merged[writeIndex] = list1[pointer1++];
  } else {
    merged[writeIndex] = list2[pointer2++];
  }
}

console.log(merged);
