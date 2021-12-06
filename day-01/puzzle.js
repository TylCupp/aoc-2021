const depthIncreaseCount = (numbers) => {
  let count = 0;

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i -1]) {
      count += 1;
    }
  }

  return count;
}

const depthIncreaseCountThree = (numbers) => {
  let count = 0;

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i+2]) {
      const currentThree = numbers.slice(i, i+3);
      const lastThree = numbers.slice(i-1, i+2);
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      
      if (currentThree.reduce(reducer) > lastThree.reduce(reducer)) {
        count += 1;
      }
    }
  }
  
  return count;
}

module.exports = {
  depthIncreaseCount,
  depthIncreaseCountThree
}