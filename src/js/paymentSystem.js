export default function paymentSystem(cardNumber) {
  const firstDigit = cardNumber.slice(0, 1);
  const firstTwoDigits = cardNumber.slice(0, 2);
  let result;

  switch (firstDigit) {
    case '2':
      result = 'mir';
      break;
    case '4':
      result = 'visa';
      break;
    case '3':
      result = 'amex';
      break;
    default: {
      result = null;
      break;
    }
  }

  switch (firstTwoDigits) {
    case '50':
    case '56':
    case '57':
    case '58':
    case '67':
    case '63':
      result = 'maestro';
      break;
    case '51':
    case '52':
    case '53':
    case '54':
    case '55':
      result = 'mastercard';
      break;
    case '62':
      result = 'unionpay';
      break;

      // no default
  }

  return result;
}
