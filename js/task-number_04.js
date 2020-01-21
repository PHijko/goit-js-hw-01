const credits = 23580;
const pricePerDroid = 3000;
const amountDroid = prompt('Сколько дроидов хотите купить?');
const totalPrice = pricePerDroid * amountDroid;

if (amountDroid === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${amountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}