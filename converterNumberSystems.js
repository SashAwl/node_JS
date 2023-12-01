function convert10ToOther(number, radix) {
    let coverNumber = ""

    while (number !== 0) {
        coverNumber = String(number % radix) + coverNumber;
        number = Math.trunc(number / radix);
    }
    return Number(coverNumber);
}

function convertOtherTo10(number, radix) {
    let coverNumber = 0;
    let degreeCounter = 0;

    while (number !== 0) {
        coverNumber += (number % 10) * radix ** degreeCounter;
        degreeCounter++;
        number = Math.trunc(number / 10);
    }
    return coverNumber;
}

module.exports = { convert10ToOther, convertOtherTo10 }