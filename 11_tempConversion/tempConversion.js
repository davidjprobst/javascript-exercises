const convertToCelsius = function(fTemp) {
  // x °F ≘ (x − 32) × ⁠5/9°C
  let cTemp = 0;
  cTemp = (fTemp - 32) * (5/9);
  return Math.round(cTemp*10)/10;
};

const convertToFahrenheit = function(cTemp) {
  // x °C ≘ (x × ⁠9/5 + 32) °F
  let fTemp = 0;
  fTemp = cTemp * (9/5) + 32;
  return Math.round(fTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
