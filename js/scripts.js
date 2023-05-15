function luhnAlgorithm(number) {
  const stringNumber = number.toString();
  const numberArray = stringNumber.split('');
  const newArray = [];
  for (let index = 0; index < numberArray.length; index++) {
    if (index % 2 != 0) {
      let element = numberArray[index] * 2;
      element = element.toString();
      if (element.length === 2) {
        element = parseInt(element[0]) + parseInt(element[1]);
      }
      newArray.push(element);
    }
    else {
      const element = parseInt(numberArray[index]);
      newArray.push(element);
    }
  }
  let numberSum = 0;
  newArray.forEach(function(number) {
    numberSum += parseInt(number);
  });
  numberSum = numberSum.toString();
  let result = ''
  if (numberSum[numberSum.length - 1] === '0' && checkFirstDigits(stringNumber) === 'valid') {
    result = 'valid';
  }
  else {
    result = 'invalid';
  }
  return result;
}

function checkFirstDigits(number) {
  if (number.slice(0, 2) === '34' | number.slice(0, 2) === '37') {
    return 'American Express';
  }
  else if (number[0] === '4' | number[0] === '5' | number[0] === '6') {
    return 'Other';
  }
  else {
    return 'invalid';
  }
}

function checkLength(number) {
  if (number.length === 16 && checkFirstDigits(number) === 'Other') {
    return 'valid';
  }
  else if (number.length === 15 && checkFirstDigits(number) === 'American Express') {
    return 'valid';
  }
}