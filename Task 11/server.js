const express = require('express');
const calculator = require('./calculator');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = calculator.add(Number(num1), Number(num2));
      break;
    case 'subtract':
      result = calculator.subtract(Number(num1), Number(num2));
      break;
    case 'multiply':
      result = calculator.multiply(Number(num1), Number(num2));
      break;
    case 'divide':
      result = calculator.divide(Number(num1), Number(num2));
      break;
    case 'square':
      result = calculator.square(Number(num1));
      break;
    case 'squareRoot':
      result = calculator.squareRoot(Number(num1));
      break;
    case 'factorial':
      result = calculator.factorial(Number(num1));
      break;
    case 'power':
      result = calculator.power(Number(num1), Number(num2));
      break;
    case 'modulus':
      result = calculator.modulus(Number(num1), Number(num2));
      break;
    case 'absolute':
      result = calculator.absolute(Number(num1));
      break;
    case 'negate':
      result = calculator.negate(Number(num1));
      break;
    case 'isEven':
      result = calculator.isEven(Number(num1));
      break;
    case 'isOdd':
      result = calculator.isOdd(Number(num1));
      break;
    case 'isPrime':
      result = calculator.isPrime(Number(num1));
      break;
    case 'max':
      result = calculator.max(Number(num1), Number(num2));
      break;
    case 'min':
      result = calculator.min(Number(num1), Number(num2));
      break;
    case 'average':
      result = calculator.average([Number(num1), Number(num2)]);
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
