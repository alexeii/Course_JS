"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "фриланс";
let addExpenses;
let deposit = true;
let mission = 1000000;
let period = 6;

let start = function () {
  do {
    money = prompt("Ваш месячный доход?", "60000");
  } while (!isNumber(money));
};

start();

deposit = confirm("Есть ли у вас депозит в банке?");

let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "жилье, телефон"
);
/* console.log(addExpenses.toLowerCase().split(",")); */

let expenses = [];

function getExpensesMonth() {
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?", "интернет");

    sum1 = prompt("Во сколько это обойдется?");
    while (!isNumber(sum1)) {
      sum1 = prompt("Во сколько это обойдется?");
    }
    sum += +sum1;
  }
  console.log(expenses);

  return sum;
}

let expensesAmount = getExpensesMonth();

console.log("Расходы за месяц: " + expensesAmount);

function getAccumulatedMonth() {
  return +money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}
if (+getTargetMonth() > 0) {
  console.log("Цель будет достигнута за " + getTargetMonth() + " месяцев");
} else {
  console.log("Цель не будет достигнута");
}

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день : " + budgetDay);

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return "У вас высокий уровень дохода";
  } else if (budgetDay < 1200 && budgetDay >= 600) {
    return "У вас средний уровень дохода";
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (budgetDay < 0) {
    return "Что то пошло не так";
  }
};
console.log(getStatusIncome());
