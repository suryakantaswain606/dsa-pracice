let n = 5;
let k = 1;

for (let i = 1; i <= 5; i++) {
  let str = "";

  for (let j = 1; j <= i; j++) {
    str += k + " ";
    k = 1 - k;
  }
  console.log(str);
}
