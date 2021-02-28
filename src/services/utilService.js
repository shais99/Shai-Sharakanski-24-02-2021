export function convertFahrenheitToCelsius(f) {
  return +(((f - 32) * 5) / 9).toFixed(1);
}

export function convertCelsiusToFahrenheit(c) {
  return +((c * 9) / 5 + 32).toFixed(1);
}
