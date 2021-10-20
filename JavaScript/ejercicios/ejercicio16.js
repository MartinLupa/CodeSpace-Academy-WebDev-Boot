const nums = [2, 6, 8, 13, 1, 7, 4, 8, 10, 25, 3];
let squareNum = 0;

for (i = 0; i <= 9; i++) {
  squareNum += nums[i] ** 2;
}

console.log(squareNum);
