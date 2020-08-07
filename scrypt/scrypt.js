let money = 90000;
let income = 30000;
let addExpenses = 'интернет, автобус, жилье, телефон';
let deposit = true;
let mission = 1000000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('"Период равен ' + period + ' месяцев"' + ' и ' + '"Цель заработать ' + mission + ' рублей/долларов/гривен/юани"');
console.log(addExpenses.toLowerCase().split(','));

let budgetDay = money / 30;
console.log(budgetDay);