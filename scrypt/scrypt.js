"use strict";
let money = 90000;
let income = "фриланс";
let addExpenses = "интернет, автобус, жилье, телефон";
let deposit = true;
let mission = 1000000;
let period = 6;

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
console.log(addExpenses.toLowerCase().split(","));

deposit = confirm("Есть ли у вас депозит в банке?");

let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt("Введите обязательную статью расходов?", "интернет");
let amount1 = +prompt("Во сколько это обойдется?", "1500");
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
let amount2 = +prompt("Во сколько это обойдется?", "18000");
while (
  amount2 === undefined ||
  amount2 === null ||
  amount2 === "" ||
  isNaN(amount2)
) {
  alert("Введите число ");
  amount2 = +prompt("Во сколько это обойдется?", "0");
}

//Lesson 04
function getExpensesMonth() {
  return amount1 + amount2;
}
console.log("Расходы за месяц: " + getExpensesMonth());
function getAccumulatedMonth() {
  return money - amount1 - amount2;
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
}
console.log("Цель будет достигнута за " + getTargetMonth() + " месяцев");

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
