/* eslint-disable default-case */
import { Fahrenheit2Celsius, Celsius2Kelvin, Fahrenheit2Kelvin } from './math';

export const filterAndSortSensors = (sensors) =>
  sensors
    .map((item) => ({
      ...item,
      percOutOfRange: getOutOfRangePercentage(item),
    }))
    .filter((item) => item.deleted !== true)
    .sort((a, b) => (a.txid > b.txid ? 1 : -1));
export const getOutOfRangePercentage = ({
  heartbeat,
  unit,
  rangeMin,
  rangeMax,
}) => {
  if (unit === '%') {
    const minValue = rangeMin / heartbeat;
    const maxValue = heartbeat / rangeMax;

    return Math.max(minValue, maxValue);
  }

  if (unit === 'WC') {
    let minValue = rangeMin / heartbeat;
    let maxValue = heartbeat / rangeMax;

    if (heartbeat < 0) {
      minValue = rangeMax / heartbeat;
      maxValue = heartbeat / rangeMin;
    }

    return Math.max(minValue, maxValue);
  }

  if (unit === 'µm') {
    return heartbeat / rangeMax;
  }

  const kelvinValue = Fahrenheit2Kelvin(heartbeat);
  const kelvinRangeMax =
    unit === 'C' ? Celsius2Kelvin(rangeMax) : Fahrenheit2Kelvin(rangeMax);
  const kelvinrangeMin =
    unit === 'C' ? Celsius2Kelvin(rangeMin) : Fahrenheit2Kelvin(rangeMin);

  const minValue = Math.abs(kelvinrangeMin / kelvinValue);
  const maxValue = Math.abs(kelvinValue / kelvinRangeMax);

  return Math.max(minValue, maxValue);
};

export const getColor = ({ heartbeat, unit, rangeMin, rangeMax, alarmOn }) => {
  let theme = {
    offline: '#777586',
    inRange: '#387F3C',
    maxRange: '#B00020',
    minRange: '#1976D2',
    alarm: '#F57C00',
  };

  const newValue = unit === 'C' ? Fahrenheit2Celsius(heartbeat) : heartbeat;

  if (newValue == 9999 || newValue == -9999) {
    return 'rgb(66, 66, 66)';
  }

  if (newValue < rangeMin) {
    return theme.minRange;
  }

  if (newValue > rangeMax) {
    return theme.maxRange;
  }

  if (alarmOn) {
    return theme.alarm;
  }

  return theme.inRange;
};

export const formatHeartbeat = (value, unit) => {
  if (value == 9999 || value == -9999) {
    return 'Not Av.';
  }

  switch (unit) {
    case 'C':
      return Fahrenheit2Celsius(parseFloat(value)).toFixed(1).concat('°', unit);
    case 'F':
      return parseFloat(value).toFixed(1).concat('°', unit);
    case '%':
      return parseFloat(value).toFixed(1).concat(unit);
    case 'WC': {
      if (value > 0) {
        return parseFloat(value).toFixed(4).toString().substring(1);
      }
      return `-${parseFloat(value).toFixed(4).toString().substring(2)}`;
    }
    case 'µm': {
      return parseFloat(value).toFixed(1).concat(unit);
    }
    default:
      return parseFloat(value).toFixed(1);
  }
};

export const formatSensorType = unit => {
  switch (unit) {
    case 'C':
      return 'Temperature (°C)';
    case 'F':
      return 'Temperature (°F)';
    case '%':
      return 'Humidity (%)';
    case 'WC':
      return 'Pressure (WC)';
    case 'µm':
      return 'Particle Counter';
    default:
      return '';
  }
};

export const getClientDetailsArray = data => {
  const floorsData = data
    .filter(obj => obj.floors && obj.floors.SS && obj.floors.SS.length > 0)
    .map(({ floors }) => floors.SS);
  const mergedArray = [].concat(...floorsData);
  const transformedArray = mergedArray
    .flat()
    .map(element => ({ label: element, value: element }));
  transformedArray.unshift({ label: 'All', value: 'All' });
  return transformedArray;
};
