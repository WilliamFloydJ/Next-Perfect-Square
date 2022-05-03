const nextPerfectSquare = (num) => {
  let SqrtNum = Math.sqrt(num);

  if (SqrtNum % 1 != 0) {
    return -1;
  }
  let nextNum = SqrtNum + 1;
  let nextSquare = nextNum * nextNum;
  let i = 0;
  while (nextSquare % 1 != 0) {
    i++;
    nextNum = SqrtNum + i;
    nextSquare = nextNum * nextNum;
  }

  return nextSquare;
};

console.log(nextPerfectSquare(144));
