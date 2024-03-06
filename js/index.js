const converterTypeInput = document.getElementById('converter-type-input');
const title1 = document.getElementById('title-1');
const title2 = document.getElementById('title-2');
const primaryInput = document.getElementById('primary-input');
const secondaryInput = document.getElementById('secondary-input');
const abbreviation1 = document.getElementById('abbreviation-1');
const abbreviation2 = document.getElementById('abbreviation-2');

const handleConverterTypeChange = (event) => {
    event.preventDefault()
    const {
        from,
        to,
        fromAbbreviation,
        toAbbreviation
    } = getParsedData(event.target.value)
    title1.innerHTML = `Convert from ${from}`;
    title2.innerHTML = `to ${to}`;
    primaryInput.placeholder = `Text in ${fromAbbreviation}°`
    secondaryInput.placeholder = `Text in ${toAbbreviation}°`
    abbreviation1.innerHTML = `${fromAbbreviation}°`
    abbreviation2.innerHTML = `${toAbbreviation}°`
    primaryInput.value = '';
    secondaryInput.value = '';
    return event;
};

const handleChange = (event) => {
    event.preventDefault()
    const { id, value } = event.target
    const { value: generalValue } = converterTypeInput
    const { fn } = getParsedData(generalValue)
    const result = fn(value)
    const newValue = value === '' ? '' : result
    if (id === 'primary-input') {
        secondaryInput.value = newValue;
    } else if (id === 'secondary-input') {
        primaryInput.value = newValue;
    }
    return event
}

converterTypeInput.addEventListener('change', handleConverterTypeChange);
primaryInput.addEventListener('input', handleChange);
secondaryInput.addEventListener('input', handleChange);

const celsiusToFahrenheit = celsius => (celsius * 1.8) + 32;
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;
const celsiusToKelvin = celsius => celsius + 273.15;
const kelvinToCelsius = kelvin => kelvin - 273.15;
const celsiusToRankine = celsius => (celsius + 273.15) * 1.8;
const rankineToCelsius = rankine => (rankine / 1.8) - 273.15;
const celsiusToDelisle = celsius => (100 - celsius) * (5 / 6);
const delisleToCelsius = delisle => 100 - (delisle * 6 / 5);
const fahrenheitToKelvin = fahrenheit => (fahrenheit - 32) * (5 / 9) + 273.15;
const kelvinToFahrenheit = kelvin => (kelvin - 273.15) * 1.8 + 32;
const fahrenheitToRankine = fahrenheit => fahrenheit + 459.67;
const rankineToFahrenheit = rankine => rankine - 459.67;
const fahrenheitToDelisle = fahrenheit => (212 - fahrenheit) * (5 / 6);
const delisleToFahrenheit = delisle => 212 - (delisle * 6 / 5);
const kelvinToRankine = kelvin => kelvin * 1.8;
const rankineToKelvin = rankine => rankine / 1.8;
const kelvinToDelisle = kelvin => (373.15 - kelvin) * (5 / 6);
const delisleToKelvin = delisle => 373.15 - (delisle * 6 / 5);
const rankineToDelisle = rankine => (671.67 - rankine) * (5 / 6);
const delisleToRankine = delisle => 671.67 - (delisle * 6 / 5);

const getParsedData = (selectedValue) => {
    switch (selectedValue) {
        case "C-F":
            return { from: 'Celsius', to: 'Fahrenheit', fromAbbreviation: 'C', toAbbreviation: 'F', fn: celsiusToFahrenheit };
        case "F-C":
            return { from: 'Fahrenheit', to: 'Celsius', fromAbbreviation: 'F', toAbbreviation: 'C', fn: fahrenheitToCelsius };
        case "C-K":
            return { from: 'Celsius', to: 'Kelvin', fromAbbreviation: 'C', toAbbreviation: 'K', fn: celsiusToKelvin };
        case "K-C":
            return { from: 'Kelvin', to: 'Celsius', fromAbbreviation: 'K', toAbbreviation: 'C', fn: kelvinToCelsius };
        case "C-R":
            return { from: 'Celsius', to: 'Rankine', fromAbbreviation: 'C', toAbbreviation: 'R', fn: celsiusToRankine };
        case "R-C":
            return { from: 'Rankine', to: 'Celsius', fromAbbreviation: 'R', toAbbreviation: 'C', fn: rankineToCelsius };
        case "C-De":
            return { from: 'Celsius', to: 'Delisle', fromAbbreviation: 'C', toAbbreviation: 'De', fn: celsiusToDelisle };
        case "De-C":
            return { from: 'Delisle', to: 'Celsius', fromAbbreviation: 'De', toAbbreviation: 'C', fn: delisleToCelsius };
        case "F-K":
            return { from: 'Fahrenheit', to: 'Kelvin', fromAbbreviation: 'F', toAbbreviation: 'K', fn: fahrenheitToKelvin };
        case "K-F":
            return { from: 'Kelvin', to: 'Fahrenheit', fromAbbreviation: 'K', toAbbreviation: 'F', fn: kelvinToFahrenheit };
        case "F-R":
            return { from: 'Fahrenheit', to: 'Rankine', fromAbbreviation: 'F', toAbbreviation: 'R', fn: fahrenheitToRankine };
        case "R-F":
            return { from: 'Rankine', to: 'Fahrenheit', fromAbbreviation: 'R', toAbbreviation: 'F', fn: rankineToFahrenheit };
        case "F-De":
            return { from: 'Fahrenheit', to: 'Delisle', fromAbbreviation: 'F', toAbbreviation: 'De', fn: fahrenheitToDelisle };
        case "De-F":
            return { from: 'Delisle', to: 'Fahrenheit', fromAbbreviation: 'De', toAbbreviation: 'F', fn: delisleToFahrenheit };
        case "K-R":
            return { from: 'Kelvin', to: 'Rankine', fromAbbreviation: 'K', toAbbreviation: 'R', fn: kelvinToRankine };
        case "R-K":
            return { from: 'Rankine', to: 'Kelvin', fromAbbreviation: 'R', toAbbreviation: 'K', fn: rankineToKelvin };
        case "K-De":
            return { from: 'Kelvin', to: 'Delisle', fromAbbreviation: 'K', toAbbreviation: 'De', fn: kelvinToDelisle };
        case "De-K":
            return { from: 'Delisle', to: 'Kelvin', fromAbbreviation: 'De', toAbbreviation: 'K', fn: delisleToKelvin };
        case "R-De":
            return { from: 'Rankine', to: 'Delisle', fromAbbreviation: 'R', toAbbreviation: 'De', fn: rankineToDelisle };
        case "De-R":
            return { from: 'Delisle', to: 'Rankine', fromAbbreviation: 'De', toAbbreviation: 'R', fn: delisleToRankine };
        default:
            return { from: 'Invalid', to: 'Invalid', fromAbbreviation: 'Invalid', toAbbreviation: 'Invalid', fn: null };
    }
}