const convertSystemOfNumbers = require('./converterNumberSystems.js');

const numberFromDecimalSystem = 32;
const desiredSystem = 2;
let result = convertSystemOfNumbers.convert10ToOther(numberFromDecimalSystem, desiredSystem);
console.log(`Число ${numberFromDecimalSystem} в десятичной системе счисления = ${result} в системе счисления с основанием ${desiredSystem}`);

currentSystem = 8;
numberFromCurrentSystem = 1000;
result = convertSystemOfNumbers.convertOtherTo10(numberFromCurrentSystem, currentSystem);
console.log(`Число ${numberFromCurrentSystem} в системе счисления с основанием ${currentSystem} = ${result} в десятичной системе счисления`);