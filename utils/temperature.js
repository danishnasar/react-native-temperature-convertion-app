const checkDecimal = (temp) => {
    convertedTemp = temp % 1 === 0 ? temp : temp.toFixed(2);
    return convertedTemp;
};

export const UNITS = {
    celcius: '°C',
    fahrenheit: '°F'
}

export const convertUnit = (temperature, unit) => {
    if (unit === UNITS.celcius) {
        convertedTemp = (temperature - 32) / 1.8;
        fixedTemp = checkDecimal(convertedTemp);
        return fixedTemp;
    } else if (unit === UNITS.fahrenheit) {
        convertedTemp = temperature * 1.8 + 32;
        fixedTemp = checkDecimal(convertedTemp);
        return fixedTemp;
    } else throw new Error('Invalid Unit');
};

export const getOpposite = (unit) => {
    return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
};

export const isCold = (temperature, unit) => {
    if (unit === UNITS.celcius) return temperature <= 0;
    else if (unit === UNITS.fahrenheit) return temperature <= 32;
    else throw new Error('Invalid unit');
};