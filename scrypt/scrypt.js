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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 3,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный заработок?")) {
      let itemIncome = prompt("Какой у вас дополнительный заработок", "Таксую");
      while (isNumber(itemIncome) || !itemIncome.trim()) {
        itemIncome = prompt("Какой у вас дополнительный заработок", "Таксую");
      }
      let cashIncome = prompt(
        "Сколько в месяц вы зарабатываете на этом?",
        10000
      );
      while (!isNumber(cashIncome)) {
        cashIncome = prompt("Сколько в месяц вы зарабатываете на этом?", 10000);
      }
      appData.income[itemIncome] = +cashIncome;
    }
    for (let i = 0; i < 4; i++) {
      do {
        appData.addExpenses[i] = prompt(
          "Введите обязательную статью расходов?",
          "интернет"
        );
      } while (
        isNumber(appData.addExpenses[i]) ||
        !appData.addExpenses[i].trim()
      );
      do {
        appData.expenses[appData.addExpenses[i]] = prompt(
          "Во сколько это обойдется?"
        );
      } while (!isNumber(appData.expenses[appData.addExpenses[i]]));
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
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt("Какой годовой процент?", 10);
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt("Какая сумма на депозите?", 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
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

appData.getInfoDeposit();
//Возможные расходы каждое слово с большой буквы
let strResult = "";
for (let i = 0; i < appData.addExpenses.length; i++) {
  let str = appData.addExpenses[i].trim().toLowerCase();
  if (i < appData.addExpenses.length - 1) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    strResult += newStr + ", ";
  } else {
    let newStr = str[0].toUpperCase() + str.slice(1);
    strResult += newStr;
  }
}
console.log("Возможные расходы : " + strResult);
