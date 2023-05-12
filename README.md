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