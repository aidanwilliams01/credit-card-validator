function luhnAlgorithm(number) {
  let stringNumber = number.toString();
  let numberArray = stringNumber.split('');
  let newArray = [];
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
  const newNumber = parseInt(newArray.join(''));
  return newNumber;
}