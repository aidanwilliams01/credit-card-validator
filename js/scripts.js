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
  if (numberSum[numberSum.length - 1] === '0') {
    result = 'valid';
  }
  return result;
}