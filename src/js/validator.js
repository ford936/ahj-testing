export default function validator(ccn) {
  const ccnS = ccn.toString();
  let sum = 0;
  const parity = (ccnS.length) % 2;

  for (let i = 0; i < ccnS.length; i += 1) {
    let digit = Number(ccnS[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return Number(sum % 10) === 0;
}
