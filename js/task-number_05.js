let price;
let country = prompt('Введите страну доставки:');
if (country === null) {
  alert('Отменено пользователем!');
} else {
  const normalizedCountry = country.toLowerCase();
  switch (normalizedCountry) {
    case 'китай':
      country = 'Китай';
      price = 100;
      break;
    case 'чили':
      country = 'Чили';
      price = 250;
      break;
    case 'австралия':
      country = 'Австралию';
      price = 170;
      break;
    case 'индия':
      country = 'Индию';
      price = 80;
      break;
    case 'ямайка':
      country = 'Ямайку';
      price = 120;
      break;
    default:
      country = 'unavailable';
      alert('В вашей стране доставка не доступна');
  }
  if (country !== 'unavailable') {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
  }
}