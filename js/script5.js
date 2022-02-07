'use strict'
//Задача.Какую длиннну мы получим? 4.


let arrOne = ['Ваня', 'Петя', 'Оля',];
let newArrOne = arrOne;
newArrOne.push('Федор');
console.log(arrOne.length);


//Задача
/*
Создайте массив users с элементами "Ваня" и "Петя"
Добавьте "Оля" в конец.
Замените значение в "Петя" на "Коля".
Ваш код для поиска значеничя должен работать
для массива с любой длинной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша " и "Паша" в начало массива.
 */
let arr =  ['Ваня', 'Петя',];
let newArr = arr;
newArr.push('Оля');
newArr[1] = 'Коля';
let removed = newArr.splice(0,1);
console.log(removed);
newArr.splice(0,0,'Маша','Паша',);
console.log(newArr);


//Задача. Удалить элемент 'Иштван' и возвратить его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let deleted = arrTwo.splice(1,1);
console.log(deleted);




//Задача. Сделать из строки массив
 let str = 'Ваня, Иштван ,Оля' ;
 let arrThree = str.split(',');
 console.log(arrThree);


//Чему равен previousValue в начале работы метода?
// let arr = [9 ,2 ,8,];
// let reduceValue = arrTwo.reduce(function(previousValue, item, index, array) {
//console.log(previousValue);
// Ответ:9 , тк  не было задано начальное  значение, и previousValue будет равно первому элементу массива.

