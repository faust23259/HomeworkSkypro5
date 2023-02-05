// Task 1

function comparingNumbers(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

comparingNumbers(3, 7);
comparingNumbers(5, 5);
let resultOne = comparingNumbers(3, 7);
let resultTwo = comparingNumbers(5, 5);
console.log(resultOne);
console.log(resultTwo);

// Task 2

let digit = prompt('Введите число')

function parityCheck(digit) {
    if (digit % 2 === 0) {
        return 'Четное число';
    } else {
        return 'Не четное число';
    }
}

console.log(parityCheck(digit));


// Task 3.1

let squareLog = (n) => {
    square = n ** 2;
    console.log(square);
}
squareLog(7);

// // Task 3.2

let squareReturn = (m) => {
    return m ** 2;
}
console.log(squareReturn(7));

// Task 4

function nameQuestion(question) {
    let yourName = prompt(question);

    if (yourName < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (yourName >= 0 && yourName <= 12) {
        console.log('Привет, друг!');
    } else if (yourName >= 13) {
        console.log('Добро пожаловать!');
    }
}

nameQuestion('Сколько Вам лет?')

// Task 5

function numberCheck(a, b) {
    if (typeof (a) != 'number' || typeof (b) != 'number') {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(numberCheck(85, 7));

// Task 6

function numberQuestion(i) {
    let numberAnswer = Number(prompt(i));

    if (!isNaN(numberAnswer)) {
        let multi = numberAnswer ** 3;
        return `${numberAnswer} в кубе ровняется ${multi}`
    } else {
        return 'Переданный параметр не является числом';
    }
}

console.log(numberQuestion('Введите число'));