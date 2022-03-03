// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum (a)  {
 return function sum (b) {
    return sum = a + b
}

}

console.log(sum(1 ) (2));

console.log('-------------------');


// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
//
//     Сделайте набор «готовых к употреблению» фильтров:
//
//     inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
//     Они должны использоваться таким образом:
//
//     arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива


function inBetween (a,b) {
    return function (x) {
        return x >= a && x <=b ;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(3,6)));

console.log('-------------------');

function inArray(arr) {
    return function (x){
        return arr.includes (x);
    };
}

console.log(arr.filter(inArray([1, 2 , 7, 20, 10 ])));

console.log('-------------------');

// У нас есть массив объектов, который нужно отсортировать:
//
//     let users = [
//         { name: "John", age: 20, surname: "Johnson" },
//         { name: "Pete", age: 18, surname: "Peterson" },
//         { name: "Ann", age: 19, surname: "Hathaway" }
//     ];
// Обычный способ был бы таким:
//
// // по имени (Ann, John, Pete)
//     users.sort((a, b) => a.name > b.name ? 1 : -1);
//
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?
//
//     users.sort(byField('name'));
// users.sort(byField('age'));
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
//
//     Напишите функцию byField, которая может быть использована для этого.


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField (field) {
    return (a , b) => a[field] > b[field] ? 1 : -1 ;
}

users.sort(byField('name'));
users.forEach(user => console.log(user.name))

console.log('-------------------');

users.sort(byField('age'));
users.forEach(user => console.log(user.name));

console.log('-------------------');

// Следующий код создаёт массив из стрелков (shooters).
//
//     Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
//
// function makeArmy() {
//     let shooters = [];
//
//     let i = 0;
//     while (i < 10) {
//         let shooter = function() { // функция shooter
//             alert( i ); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
 let army = makeArmy();
army[1] ();
army[9] ();
