let money, time;

function start() {
    money = prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2  ; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a)) == "string" && (typeof(a)) != null && (typeof(b)) != null && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
    };
}
chooseExpenses();


appData.moneyPerDey = (appData.budget / 30).toFixed(); //Округление   
function detectDayBudget () {
    alert("Ежедневный бюджет: " + appData.moneyPerDey);
};
detectDayBudget();


function detectLevel (x) {
    if (x < 100) {
        console.log("Минимальный уровень достатка");
    } else if (x > 100 && x < 2000) {
        console.log("Средний уровень достатка");
    } else if (x > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
};
detectLevel(appData.moneyPerDey);




// console.log(detectLevel(appData.moneyPerDey));
// detectDayBudget();

function checkSavings () {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();