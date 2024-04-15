function calculate(firstValue, operator, secondValue) {
  let result;
  if (operator === '+') {
    result = firstValue + secondValue;
  } else if (operator === '-') {
    result = firstValue - secondValue;
  } else if (operator === '*') {
    result = firstValue * secondValue;
  } else if (operator === '/') {
    result = firstValue / secondValue;
  } else if (operator === '%') {
    result = firstValue % secondValue;
  } else {
    result = secondValue;
  }

  return parseFloat(result.toFixed(3));
}

export default calculate;
