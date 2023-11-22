export const Fahrenheit2Celsius = value => ((value - 32) * 5) / 9;
export const Celsius2Kelvin = value => value + 273.15;
export const Fahrenheit2Kelvin = value =>
  Celsius2Kelvin(Fahrenheit2Celsius(value));
