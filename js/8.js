// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012,01,20,03,12)
console.log(date);

console.log('-----------------------------')


// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let getWeekDay = () => {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return days[date1.getDay()]

}

let date1 = new Date(2022,1,23);
console.log(getWeekDay());

console.log('-----------------------------')

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date2 = new Date(2022 , 1, 23)
let getLocalDay = () => {
    let day = date2.getDay() ;
    if (day == 0){
        day = 7
    }
    console.log(day);

}
getLocalDay();

console.log('-----------------------------')

//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
let date3 = new Date(2022 , 1 + 1 ,0 )
let getLastDayOfMonth = (year, month) => date3.getDate();
console.log(getLastDayOfMonth());

console.log('-----------------------------')

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

let getSecondsToday = () => {
    let todayDate = new Date();
    todayDate.setHours(00,00 ,00,00)
    let nowDate = new Date();
    let diff = nowDate - todayDate
    return Math.round(diff/1000);
}
console.log(getSecondsToday());

// function getSecondsToday() {
//     let now = new Date();
//
//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     let diff = now - today; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
// }
//
// console.log( getSecondsToday() );

console.log('-----------------------------');

//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
// Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

let getSecondsToTomorrow = () => {
    let now = new Date();

    let toTomorrowDate = new Date( now.getFullYear(), now.getMonth(),now.getDate()+1);
    let diff =  toTomorrowDate - now;
    return Math.round(diff/1000);
}
console.log(getSecondsToTomorrow());


