Describe: luhnAlgorithm()

Test: It will double every other digit of the input number.
Code: luhnAlgorithm(4102080860435620)
Expected output: '4204016016604651220'

Test: It will add each digit together when a doubled digit is a double digit number.
Code: luhnAlgorithm(4102080860435620)
Expected output: 4204070760465320

Test: It will sum all digits of the transformed set of numbers.
Code: luhnAlgorithm(4102080860435620)
Expected output: 50

Test: It will return 'valid' if the sum of the transformed set of numbers ends in a 0.
Code: luhnAlgorithm(4102080860435620)
Expected output: 'valid'

Test: It will return 'invalid' if the sum of the transformed set of numbers does not end in a 0.
Code: luhnAlgorithm(4102080880435620)
Expected output: 'invalid'

Describe: checkFirstDigits()

Test: It will return 'valid' if the card number starts with a 34 or 37.
Code: checkFirstDigits('34')
Expected output: 'valid'

Test: It will return 'valid' if the card number starts with a 4, 5, or 6.
Code: checkFirstDigits('4')
Expected output: 'valid'

Describe: checkLength()

Test: It will return 'valid' if the length of the card number is 16 and checkFirstDigits returns 'Other'.
Code: checkLength('4102080860435620')
Expected output: 'valid'

Test: It will return 'valid' if the length of the card number is 15 and checkFirstDigits returns 'American Express'.
Code: checkLength('340208086043562')
Expected output: 'valid'