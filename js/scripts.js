function luhnAlgorithm(number) {
  let stringNumber = number.toString();
  let numberArray = stringNumber.split('');
  let newArray = [];
  for (let index = 0; index < numberArray.length; index++) {
    if (index % 2 != 0) {
      const element = numberArray[index] * 2;
      newArray.push(element);
    }
    else {
      const element = parseInt(numberArray[index]);
      newArray.push(element);
    }
  }
  const newNumber = newArray.join('');
  return newNumber;
}