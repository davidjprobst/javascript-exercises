function sumAll(...args) {
  const sortedNums = Array.from(args).sort();
  const finalNum = sortedNums[sortedNums.length - 1];
  let currentNum = sortedNums[0];
  let sum = 0;

  for (num of sortedNums) {
    if (num < 0) return "ERROR";
    if (!Number.isInteger(num)) return "ERROR";
  }
  
  while (currentNum <= finalNum) {
     sum = sum + currentNum;
     currentNum = currentNum + 1;
  } return sum;
  
}

// Do not edit below this line
module.exports = sumAll;
