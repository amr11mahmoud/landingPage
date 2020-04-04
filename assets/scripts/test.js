const numners = [
  [0, 1, 1],
  [1, 0, 0],
  [0, 0, 1]
];
let sum = 0;
for (i = 0; i < numners.length; i++) {
  for (j = 0; j < numners[i].length; j++) {
    if (numners[i][j] === 1) {
      sum++;
    }
  }
}
console.log(sum);
