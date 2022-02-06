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
/*
console.log('----------------------');

//задача 2.Что будет в консоли?
let userInfo = {
    name: "Вася",
    age: 30,
    "58": 'Значение свойства'
}
console.log(userInfo[58]);//Ответ: Значение свойства

console.log('----------------------');

//Задача 3.Что будет в консоли?
let userInform = {
    name: "Вася",
    age: 30
}
let user = userInform;
user.age = 45;
console.log(userInform.age);
//Ответ : 45
console.log('----------------------');

//Задача 4. Что будет в консоли?

let userInformation = {
    name: "Вася",
    age: 30,
    showInfo(){
    console.log(`${this.name}`);
    }
}
let useR = userInformation;
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
*/

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




