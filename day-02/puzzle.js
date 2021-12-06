const calculateNewPosition = (input) => {
  let horizontal = 0;
  let depth = 0;

  input.forEach(e => {
    const information = e.split(' ');
    const position = information[0];
    const value = Number(information[1]);

    switch(position) {
      case 'forward':
        horizontal = horizontal + value;
        break;
      case 'down':
        depth = depth + value;
        break;
      case 'up':
        depth = depth - value;
        break;
    }
  });
  
  return horizontal * depth;
}

const calculateNewPositionPartTwo = (input) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  input.forEach(e => {
    const information = e.split(' ');
    const position = information[0];
    const value = Number(information[1]);

    switch(position) {
      case 'forward':
        horizontal = horizontal + value;
        depth = depth + (aim * value);
        break;
      case 'down':
        aim = aim + value;
        break;
      case 'up':
        aim = aim - value;
        break;
    }
  });
  
  return horizontal * depth;
}

module.exports = {
  calculateNewPosition,
  calculateNewPositionPartTwo
}