"use strict";
let money = 90000;
let income = 30000;
let addExpenses = "интернет, автобус, жилье, телефон";
let deposit = true;
let mission = 1000000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(
  '"Период равен ' +
    period +
    ' месяцев"' +
    " и " +
    '"Цель заработать ' +
    mission +
    ' рублей/долларов/гривен/юани"'
);
console.log(addExpenses.toLowerCase().split(","));

let budgetDay = money / 30;
console.log(budgetDay);

// lesson03
money = +prompt("Ваш месячный доход?", "90000");
while (money === undefined || money === null || money === "" || isNaN(money)) {
  alert("Введите число ");
  money = +prompt("Ваш месячный доход?", "90000");
}

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "интернет, автобус, жилье, телефон"
);

deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов?", "интернет");
let amount1 = +prompt("Во сколько это обойдется?", "0");
while (
  amount1 === undefined ||
  amount1 === null ||
  amount1 === "" ||
  isNaN(amount1)
) {
  alert("Введите число ");
  amount1 = +prompt("Во сколько это обойдется?", "0");
}
let expenses2 = prompt("Введите обязательную статью расходов?", "квартплата");
let amount2 = +prompt("Во сколько это обойдется?", "0");
while (
  amount2 === undefined ||
  amount2 === null ||
  amount2 === "" ||
  isNaN(amount2)
) {
  alert("Введите число ");
  amount2 = +prompt("Во сколько это обойдется?", "0");
}

let budgetMonth = money + income - amount1 - amount2;
console.log("бюджет на месяц = " + budgetMonth + "руб.");
console.log(
  "цель будет достигнута за " + Math.ceil(mission / budgetMonth) + " месяцев"
);
budgetDay = Math.floor(budgetMonth / 30);
console.log("Бюджет на день: " + budgetDay);

if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay < 1200 && budgetDay >= 600) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так");
}
