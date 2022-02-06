'use strict'
//Задача1.Получить верные значения округления.
// let numOne = Math.round(1.005 * 100) / 100;
// console.log(numOne); //Выведет 1, что не верно.

let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
 console.log(numOne);

//Задача2.Получить число 135.58 из строки.
// let value = "135.58px";

let value = parseFloat("135.58px");
console.log(value);

//Задача3.Построить верное условие ветвления.
// let valueOne = 58 + "Фрилансер";
// if (написать ответ) {
// console.log('Результат выражения NaN');

let valueOne = 58 + "Фрилансер";
 if (58 + "Фрилансер" !== NaN) {
     console.log('Результат выражения NaN');
 }

//Задача4.Найти максимальное число из 10,58,39,-150,0
console.log(Math.max(10, 58, 39, -150, 0));



//Задача4.Округлить число 58.85 до числа 58
let num = Math.floor(58.85);
console.log(num);