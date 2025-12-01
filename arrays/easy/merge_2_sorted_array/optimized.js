// Two sorted input arrays
let list1 = [1, 2, 3, 7, 0, 0, 0];
let list2 = [2, 5, 6];

// Pointers for the valid parts of list1 and list2
let p1 = 3 - 1; // last valid element index in list1 (m = 3)
let p2 = list2.length - 1; // last element index in list2

// Merge numbers from the back of list1
for (let i = list1.length - 1; i >= 0; i--) {
  // If list2 is fully merged, we are done
  if (p2 < 0) {
    break;
  }

  // Choose larger value from list1[p1] or list2[p2]
  if (p1 >= 0 && list1[p1] >= list2[p2]) {
    list1[i] = list1[p1--];
  } else {
    list1[i] = list2[p2--];
  }
}

console.log(list1);
