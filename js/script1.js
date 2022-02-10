
//Задача.Как решить проблему?
//'use strict'
//if(2 > 1){
//  function showMessage() {
//      console.log('Сообщение');
//      }
//  }
// showMessage();//Error (showMessage is not defined)
'use strict'
let showMessage;
if(2 > 1){
    showMessage =  function (){
        console.log('Сообщение');
    };
}
showMessage();

//Задача.Перепишите  функцию, используя оператор '?' или '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

function checkAge(age){
    return (age > 18) ? true : confirm('Родители разрешили?') ;
}


function checkAgeOne(age){
    return (age > 18) || confirm('Родители разрешили?') ;
}


// Задача.Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    return(a < b) ? a : b;
}

// Задача.Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    console.log( pow(x, n) );
}
