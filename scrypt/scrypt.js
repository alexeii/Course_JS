"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt("Ваш месячный доход?", "60000");
    } while (!isNumber(money));
  };

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 100000,
  period: 6,
  asking: function () {
    for (let i = 0; i < 2; i++) {
      appData.addExpenses[i] = prompt(
        "Введите обязательную статью расходов?",
        "интернет"
      );

      appData.expenses[appData.addExpenses[i]] = prompt(
        "Во сколько это обойдется?"
      );
      while (!isNumber(appData.expenses[appData.addExpenses[i]])) {
        appData.expenses[addExpenses[i]] = prompt("Во сколько это обойдется?");
      }
    }

    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
    return appData.expensesMonth;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
      return "У вас средний уровень дохода";
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else if (appData.budgetDay < 0) {
      return "Что то пошло не так";
    }
  },
};

appData.asking();

appData.getExpensesMonth();

console.log("Расходы за месяц: " + appData.expensesMonth);

appData.getBudget();

if (+appData.getTargetMonth() > 0) {
  console.log(
    "Цель будет достигнута за " + appData.getTargetMonth() + " месяцев"
  );
} else {
  console.log("Цель не будет достигнута");
}

console.log(appData.getStatusIncome());
console.log("Наша программа включает в себя данные:");
for (let key in appData) {
  console.log("ключ:  " + key + " Значение:" + appData[key]);
}
