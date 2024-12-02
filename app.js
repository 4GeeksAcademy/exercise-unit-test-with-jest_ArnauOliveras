let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

const fromDollarToYen = function(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

const fromYenToPound = function(yen) {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };