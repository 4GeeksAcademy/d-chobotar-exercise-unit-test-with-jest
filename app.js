const euroConversionRates = {
    "JPY": 167.21,
    "USD": 1.07,
    "GBP": 0.86
}

const dollarConversionRates = {
    "JPY": 155.61,
    "EUR": 0.93,
    "GBP": 0.80
}

const yenConversionRates = {
    "USD": 0.0064,
    "EUR": 0.0060,
    "GBP": 0.0051
}

function validateInput(amount){
    if(amount < 0){
        throw new Error('Invalid Input: Amount should be a number.');
    }
    if(isNaN(amount) || typeof amount !== 'number'){
        throw new Error('Invalid Input: Amount cannot be negative.');
    }
    return true;
}    

function convertDollarToYen(amount){
    let isValidInput = validateInput(amount); 
    if(!isValidInput){
        return isValidInput;
    }
    return Math.round((amount * dollarConversionRates.JPY) * 100) / 100;
}

function convertEuroToDollar(amount){
    let isValidInput = validateInput(amount);
    if(!isValidInput){
        return isValidInput;
    }
    return Math.round((amount * euroConversionRates.USD) * 100) / 100;
} 

function convertYenToPound(amount){
    let isValidInput = validateInput(amount);
    if(!isValidInput){
        return isValidInput;
    }
    return Math.round((amount * yenConversionRates.GBP) * 100) / 100;
}

module.exports = {
    convertDollarToYen,
    convertEuroToDollar,
    convertYenToPound
}