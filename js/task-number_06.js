let total = 0;

while (true) {
  let input = prompt('Введите число:');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else {
    total += input;
  }
}

console.log(`Общая сумма введеных чисел: ${total}`);