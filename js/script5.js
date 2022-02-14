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
 let removed = newArr.shift();
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

// Задача.Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

let st = "my-short-string";
function camelize(st) {
 return st
.split('-')
 .map(
     (word, index) => index == 0 ? word :word[0].toUpperCase() + word.slice(1)
 )
.join('');

}
camelize(st);

console.log(camelize(st));

//Задача.Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

 let filterRange = (fltr, a, b) => fltr.filter(item =>(a <= item && item <= b));



let fltr = [5, 3, 8, 1];

let filtered = filterRange(fltr, 1, 4);
console.log(filtered);


//Задача.Сортировать в порядке по убывания

let far = [5, 2, 1, -10, 8];
far.sort((a, b) => b - a);
console.log(far);

//Задача.Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.


let filterRangeInPlace = (fara, a, b ) => {

 for (let i = 0; i < fara.length; i++) {
  let val = fara[i];
  if (val < a || val > b) {
   fara.splice(i, 1);
   i--;
  }
 }
}

let fara = [5, 3, 8, 1];
 filterRangeInPlace(fara,1, 4);
console.log(fara);


// Задача. У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let af = ["HTML", "JavaScript", "CSS"];

let copySorted = () => af.concat(af.sort());
copySorted(af);
console.log(af);

// У вас есть массив объектов user, и в каждом из них есть user.name.
//     Напишите код, который преобразует их в массив имён.

const users = [
 { name: "Вася", age: 25 },
 { name: "Петя", age: 30 },
 { name: "Маша", age: 28 },
]


 // const nameOfUsers = users.map((element) => users.find((element) => users.name ));
 // console.log(nameOfUsers);
// const nameOfUsers = users.map(users.find(element => users.name));
// console.log(nameOfUsers);

// for (let j = 0; j < users.length; j++) {
//  if (users[j] === users[j].name) {
//   console.log(users);
//  }
// }


