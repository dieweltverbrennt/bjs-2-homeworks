"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    arr = [];
  }
  else if (d === 0) {
    arr[0] = -b / (2*a);
  }
  else {
    arr[0] = (-b + Math.sqrt(d)) / (2*a);
    arr[1] = (-b - Math.sqrt(d)) / (2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"";
  }
  if (isNaN(contribution)) {
    return "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"";
  }
  if (isNaN(amount)) {
    return "Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount + "\"";
  }

  let loanBody = amount - contribution;

  let start = new Date()
  let startYear = start.getFullYear();
  let startMonth = start.getMonth()
  let endYear = date.getFullYear();
  let endMonth = date.getMonth();
  let period = endMonth + 12 * (endYear - startYear - 1) + 12 - startMonth;

  let monthlyPercent = percent / 100 / 12;

  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**period) - 1)));
  totalAmount = monthlyPayment * period;
  return Number(totalAmount.toFixed(2));
}
