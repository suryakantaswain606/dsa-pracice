let n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";
  let k = 1;

  for (let j = 1; j <= 3; j++) {
    str += String(k++).padStart(2, " ") + " ";
    str += String(i).padStart(2, " ") + " ";
  }

  console.log(str);
}
