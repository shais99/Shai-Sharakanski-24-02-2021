export function convertFahrenheitToCelsius(f) {
  return +(((f - 32) * 5) / 9);
}

export function convertCelsiusToFahrenheit(c) {
  return +((c * 9) / 5 + 32);
}
