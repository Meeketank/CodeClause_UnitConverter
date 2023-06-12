function convertLength() {
  const lengthInput = document.getElementById('lengthInput').value;
  const lengthFrom = document.getElementById('lengthFrom').value;
  const lengthTo = document.getElementById('lengthTo').value;
  const lengthResult = document.getElementById('lengthResult');

  // Perform the conversion logic
  const conversionTable = {
    'm': 1,
    'cm': 0.01,
    'km': 1000,
    'ft': 0.3048,
    'in': 0.0254,
    'yd': 0.9144,
    'mi': 1609.34
  };

  const meters = parseFloat(lengthInput) * conversionTable[lengthFrom];
  const result = meters / conversionTable[lengthTo];

  lengthResult.innerHTML = `${lengthInput} ${lengthFrom} = ${result.toFixed(2)} ${lengthTo}`;
}

function convertTemperature() {
  const temperatureInput = document.getElementById('temperatureInput').value;
  const temperatureFrom = document.getElementById('temperatureFrom').value;
  const temperatureTo = document.getElementById('temperatureTo').value;
  const temperatureResult = document.getElementById('temperatureResult');

  // Perform the conversion logic
  let result;
  if (temperatureFrom === 'c') {
    if (temperatureTo === 'f') {
      result = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (temperatureTo === 'k') {
      result = parseFloat(temperatureInput) + 273.15;
    }
  } else if (temperatureFrom === 'f') {
    if (temperatureTo === 'c') {
      result = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (temperatureTo === 'k') {
      result = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    }
  } else if (temperatureFrom === 'k') {
    if (temperatureTo === 'c') {
      result = parseFloat(temperatureInput) - 273.15;
    } else if (temperatureTo === 'f') {
      result = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    }
  }

  temperatureResult.innerHTML = `${temperatureInput} °${temperatureFrom.toUpperCase()} = ${result.toFixed(2)} °${temperatureTo.toUpperCase()}`;
}

function convertArea() {
  const areaInput = document.getElementById('areaInput').value;
  const areaFrom = document.getElementById('areaFrom').value;
  const areaTo = document.getElementById('areaTo').value;
  const areaResult = document.getElementById('areaResult');

  // Perform the conversion logic
  const conversionTable = {
    'm2': 1,
    'cm2': 0.0001,
    'km2': 1000000,
    'ft2': 0.092903,
    'in2': 0.00064516,
    'yd2': 0.836127,
    'ac': 4046.86,
    'ha': 10000
  };

  const squareMeters = parseFloat(areaInput) * conversionTable[areaFrom];
  const result = squareMeters / conversionTable[areaTo];

  areaResult.innerHTML = `${areaInput} ${areaFrom} = ${result.toFixed(2)} ${areaTo}`;
}

function convertVolume() {
  const volumeInput = document.getElementById('volumeInput').value;
  const volumeFrom = document.getElementById('volumeFrom').value;
  const volumeTo = document.getElementById('volumeTo').value;
  const volumeResult = document.getElementById('volumeResult');

  // Perform the conversion logic
  const conversionTable = {
    'l': 1,
    'ml': 0.001,
    'm3': 1000,
    'cm3': 0.001,
    'ft3': 28.3168,
    'in3': 0.0163871,
    'gal': 3.78541,
    'qt': 0.946353
  };

  const liters = parseFloat(volumeInput) * conversionTable[volumeFrom];
  const result = liters / conversionTable[volumeTo];

  volumeResult.innerHTML = `${volumeInput} ${volumeFrom} = ${result.toFixed(2)} ${volumeTo}`;
}

function convertWeight() {
  const weightInput = document.getElementById('weightInput').value;
  const weightFrom = document.getElementById('weightFrom').value;
  const weightTo = document.getElementById('weightTo').value;
  const weightResult = document.getElementById('weightResult');

  // Perform the conversion logic
  const conversionTable = {
    'kg': 1,
    'g': 0.001,
    'mg': 0.000001,
    'lb': 0.453592,
    'oz': 0.0283495,
    'st': 6.35029,
    't': 1000
  };

  const kilograms = parseFloat(weightInput) * conversionTable[weightFrom];
  const result = kilograms / conversionTable[weightTo];

  weightResult.innerHTML = `${weightInput} ${weightFrom} = ${result.toFixed(2)} ${weightTo}`;
}

function convertTime() {
  const timeInput = document.getElementById('timeInput').value;
  const timeFrom = document.getElementById('timeFrom').value;
  const timeTo = document.getElementById('timeTo').value;
  const timeResult = document.getElementById('timeResult');

  // Perform the conversion logic
  const conversionTable = {
    'ns': 1e-9,
    'ms': 1e-3,
    's': 1,
    'min': 60,
    'h': 3600,
    'd': 86400,
    'wk': 604800,
    'mo': 2.628e+6,
    'yr': 3.154e+7
  };

  const seconds = parseFloat(timeInput) * conversionTable[timeFrom];
  const result = seconds / conversionTable[timeTo];

  timeResult.innerHTML = `${timeInput} ${timeFrom} = ${result.toFixed(2)} ${timeTo}`;
}

// Show the appropriate converter based on the selected conversion type
const conversionType = document.getElementById('conversionType');
conversionType.addEventListener('change', function() {
  const selectedConverter = this.value + 'Converter';
  const converters = document.getElementsByClassName('converter');
  for (let i = 0; i < converters.length; i++) {
    converters[i].style.display = 'none';
  }
  document.getElementById(selectedConverter).style.display = 'block';
});
