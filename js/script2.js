//'use strict'
    //задача 1. Верна ли запись?
    //  сonst userInfo = {
    //  name: "Вася"
    //  age: 30
    // } - Ответ:нет! правильная запись введена ниже.
/*
const userInfo = {
    //name: "Вася",
   // age: 30,
};
*/

console.log('----------------------');

//задача 2.Что будет в консоли?
let userInformation = {
    name: "Вася",
    age: 30,
    "58": 'Значение свойства'
}
console.log(userInformation[58]);//Ответ: Значение свойства

console.log('----------------------');

//Задача 3.Что будет в консоли?
let clientInform = {
    name: "Вася",
    age: 30
}
let client = clientInform;
client.age = 45;
console.log(clientInform.age);
//Ответ : 45
console.log('----------------------');

//Задача 4. Что будет в консоли?

let userInform = {
    name: "Вася",
    age: 30,
    showInfo(){
    console.log(`${this.name}`);
    }
}
let useR = userInform;
userInformation = null;
useR.showInfo();// Ответ:Вася

console.log('----------------------');

//задача 5.Что будет в консоли?
let guestInformation = {
    name: "Вася",
    age: 30,
}
for(const key in guestInformation){
    const value = guestInformation[key];
    console.log(value);
}//Ответ: Вася 30

console.log('----------------------');

//Задача 6.Что будет в консоли?
let guestInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod"
    }
}
for(const key in guestInfo.address) {

    console.log(guestInfo.address[key]);
}
//Ответ:Uzhhorod

console.log('----------------------');

//Задача.
//1.Создайте пустой объект userinfo
//2.Добавьте свойство name со значением Вася
//3.Добавьте свойство age со значением 30
//4.измените значение свойства name на Лена.
//5.Удалите свойство Name из объекта

let userInfo = {}
userInfo.name = 'Вася';
userInfo.age =  30;
userInfo.name = 'Лена';
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);

console.log('----------------------');

//Задача.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
//
//     alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
//     alert( isEmpty(schedule) ); // false

let schedule = {};

function isEmpty(schedule) {
  for (let key in schedule) {

      return false;
  }
  return true;
}
isEmpty(schedule);


// Задача.У нас есть объект, в котором хранятся зарплаты нашей команды:
//     Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//     Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

console.log('----------------------');

// Задача.Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//     P.S. Используйте typeof для проверки, что значение свойства числовое.
// Например:
//
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
           menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

console.log('----------------------');

// Задача.Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

//     let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
},
    sum() {
       return this.a + this.b ;
},
    mul() {
        return this.a * this.b;
    },
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

console.log('----------------------');

// задача.Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
let sumSalaries1 = (salaries1) => {
    let sum = 0
    for(let sumVal of Object.values(salaries1) ) {
         sum += sumVal
    }
    return sum;
}
console.log(sumSalaries1(salaries1));

console.log('----------------------');

// Задача.Напишите функцию count(obj), которая возвращает количество свойств объекта:
//
//     let user = {
//         name: 'John',
//         age: 30
//     };
//
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

let user10 = {
    name: 'John',
    age: 30
};
const count = (obj) => Object.keys(obj).length
console.log(count(user10));
