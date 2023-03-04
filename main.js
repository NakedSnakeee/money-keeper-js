let appData = {
    monthly_budget: prompt("Ваш бюджет на месяц?"),
    time: prompt("Введите дату в формате YYYY-MM-DD"),
    expenses: {
        musthave_type: prompt("Введите обязательную статью расходов в этом месяце"),
        musthave_money: prompt("Во сколько обойдется?")
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let dayly_budget = appData.monthly_budget/30;
alert(dayly_budget);