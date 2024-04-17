function convertLength() {
    const lengthInput = parseFloat(document.getElementById('lengthInput').value);
    const lengthFrom = document.getElementById('lengthFrom').value;
    const lengthTo = document.getElementById('lengthTo').value;
    let result;

    // Convert all units to meters first
    let lengthInMeters;

    switch (lengthFrom) {
        case 'mm':
            lengthInMeters = lengthInput / 1000;
            break;
        case 'cm':
            lengthInMeters = lengthInput / 100;
            break;
        case 'm':
            lengthInMeters = lengthInput;
            break;
        case 'km':
            lengthInMeters = lengthInput * 1000;
            break;
        case 'um':
            lengthInMeters = lengthInput / 1000000;
            break;
        case 'nm':
            lengthInMeters = lengthInput / 1000000000;
            break;
        case 'in':
            lengthInMeters = lengthInput * 0.0254;
            break;
        case 'ft':
            lengthInMeters = lengthInput * 0.3048;
            break;
        case 'yd':
            lengthInMeters = lengthInput * 0.9144;
            break;
        case 'mi':
            lengthInMeters = lengthInput * 1609.34;
            break;
        case 'nmi':
            lengthInMeters = lengthInput * 1852;
            break;
    }

    // Convert meters to the target unit
    switch (lengthTo) {
        case 'mm':
            result = lengthInMeters * 1000;
            break;
        case 'cm':
            result = lengthInMeters * 100;
            break;
        case 'm':
            result = lengthInMeters;
            break;
        case 'km':
            result = lengthInMeters / 1000;
            break;
        case 'um':
            result = lengthInMeters * 1000000;
            break;
        case 'nm':
            result = lengthInMeters * 1000000000;
            break;
        case 'in':
            result = lengthInMeters / 0.0254;
            break;
        case 'ft':
            result = lengthInMeters / 0.3048;
            break;
        case 'yd':
            result = lengthInMeters / 0.9144;
            break;
        case 'mi':
            result = lengthInMeters / 1609.34;
            break;
        case 'nmi':
            result = lengthInMeters / 1852;
            break;
    }

    document.getElementById('lengthResult').innerText = `${lengthInput} ${lengthFrom} is equal to ${result.toFixed(6)} ${lengthTo}`;
}
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempFrom = document.getElementById('tempFrom').value;
    const tempTo = document.getElementById('tempTo').value;
    let result;

    switch (tempFrom) {
        case 'celsius':
            switch (tempTo) {
                case 'celsius':
                    result = tempInput;
                    break;
                case 'fahrenheit':
                    result = (tempInput * 9/5) + 32;
                    break;
                case 'kelvin':
                    result = tempInput + 273.15;
                    break;
            }
            break;
        case 'fahrenheit':
            switch (tempTo) {
                case 'celsius':
                    result = (tempInput - 32) * 5/9;
                    break;
                case 'fahrenheit':
                    result = tempInput;
                    break;
                case 'kelvin':
                    result = (tempInput - 32) * 5/9 + 273.15;
                    break;
            }
            break;
        case 'kelvin':
            switch (tempTo) {
                case 'celsius':
                    result = tempInput - 273.15;
                    break;
                case 'fahrenheit':
                    result = (tempInput - 273.15) * 9/5 + 32;
                    break;
                case 'kelvin':
                    result = tempInput;
                    break;
            }
            break;
    }

    const unitSymbolMap = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K'
    };

    document.getElementById('tempResult').innerText = `${tempInput} ${unitSymbolMap[tempFrom]} is equal to ${result.toFixed(6)} ${unitSymbolMap[tempTo]}`;
}
function convertMass() {
    const massInput = parseFloat(document.getElementById('massInput').value);
    const massFrom = document.getElementById('massFrom').value;
    const massTo = document.getElementById('massTo').value;
    let result;

    switch (massFrom) {
        case 't':
            switch (massTo) {
                case 't':
                    result = massInput;
                    break;
                case 'kg':
                    result = massInput * 1000;
                    break;
                case 'g':
                    result = massInput * 1e+6;
                    break;
                case 'mg':
                    result = massInput * 1e+9;
                    break;
                case 'ug':
                    result = massInput * 1e+12;
                    break;
                case 'lb':
                    result = massInput * 2204.62;
                    break;
                case 'oz':
                    result = massInput * 35274;
                    break;
            }
            break;
        case 'kg':
            switch (massTo) {
                case 't':
                    result = massInput * 0.001;
                    break;
                case 'kg':
                    result = massInput;
                    break;
                case 'g':
                    result = massInput * 1000;
                    break;
                case 'mg':
                    result = massInput * 1e+6;
                    break;
                case 'ug':
                    result = massInput * 1e+9;
                    break;
                case 'lb':
                    result = massInput * 2.20462;
                    break;
                case 'oz':
                    result = massInput * 35.274;
                    break;
            }
            break;
        case 'g':
            switch (massTo) {
                case 't':
                    result = massInput * 1e-6;
                    break;
                case 'kg':
                    result = massInput * 0.001;
                    break;
                case 'g':
                    result = massInput;
                    break;
                case 'mg':
                    result = massInput * 1000;
                    break;
                case 'ug':
                    result = massInput * 1e+6;
                    break;
                case 'lb':
                    result = massInput * 0.00220462;
                    break;
                case 'oz':
                    result = massInput * 0.035274;
                    break;
            }
            break;
        case 'mg':
            switch (massTo) {
                case 't':
                    result = massInput * 1e-9;
                    break;
                case 'kg':
                    result = massInput * 1e-6;
                    break;
                case 'g':
                    result = massInput * 0.001;
                    break;
                case 'mg':
                    result = massInput;
                    break;
                case 'ug':
                    result = massInput * 1000;
                    break;
                case 'lb':
                    result = massInput * 2.2046e-6;
                    break;
                case 'oz':
                    result = massInput * 3.5274e-5;
                    break;
            }
            break;
        case 'ug':
            switch (massTo) {
                case 't':
                    result = massInput * 1e-12;
                    break;
                case 'kg':
                    result = massInput * 1e-9;
                    break;
                case 'g':
                    result = massInput * 1e-6;
                    break;
                case 'mg':
                    result = massInput * 0.001;
                    break;
                case 'ug':
                    result = massInput;
                    break;
                case 'lb':
                    result = massInput * 2.2046e-9;
                    break;
                case 'oz':
                    result = massInput * 3.5274e-8;
                    break;
            }
            break;
        case 'lb':
            switch (massTo) {
                case 't':
                    result = massInput * 0.000453592;
                    break;
                case 'kg':
                    result = massInput * 0.453592;
                    break;
                case 'g':
                    result = massInput * 453.592;
                    break;
                case 'mg':
                    result = massInput * 453592;
                    break;
                case 'ug':
                    result = massInput * 4.53592e+8;
                    break;
                case 'oz':
                    result = massInput * 16;
                    break;
            }
            break;
        case 'oz':
            switch (massTo) {
                case 't':
                    result = massInput * 2.835e-5;
                    break;
                case 'kg':
                    result = massInput * 0.0283495;
                    break;
                case 'g':
                    result = massInput * 28.3495;
                    break;
                case 'mg':
                    result = massInput * 28349.5;
                    break;
                case 'ug':
                    result = massInput * 2.835e+7;
                    break;
                case 'lb':
                    result = massInput * 0.0625;
                    break;
            }
            break;
    }

    const unitSymbolMap = {
        t: 'T',
        kg: 'kg',
        g: 'g',
        mg: 'mg',
        ug: 'µg',
        lb: 'lb',
        oz: 'oz'
    };

    document.getElementById('massResult').innerText = `${massInput} ${unitSymbolMap[massFrom]} is equal to ${result.toFixed(6)} ${unitSymbolMap[massTo]}`;
}
