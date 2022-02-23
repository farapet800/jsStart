// У нас есть объект:
//
//     let user = {
//         name: "John",
//         years: 30
//     };
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

// let user = {
//     name: "John",
//     years: 30
// }
//
// let {
//    name,
//    years: age ,
//    isAdmin = false
// } = user
// console.log(name);
// console.log(age);
// console.log(isAdmin);
//
//
// console.log('----------------------');

// У нас есть объект salaries с зарплатами:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries) {

    let salary = 0;
    let maxName = null;

    for(const [name, value] of Object.entries(salaries)) {
        if (salary < value) {
            salary = value;
            maxName = name;
        }
    }

    return maxName;
}

topSalary(salaries);
console.log(topSalary(salaries));


// function topSalary(salaries) {
//     let maxSalary = Math.max(...Object.values(salaries))
//     for (let [name, salary] of Object.entries(salaries)) {
//         if (salary === maxSalary) return name
//
//     }
// }
// topSalary(salaries);
// console.log(topSalary(salaries));


// function topSalary(obj) {
//     let luckyGuyName =
//         Object.entries(obj).sort(
//             ([key1, value1], [key2, value2]) => value2 - value1
//         )[0]?.[0] || null
//     return luckyGuyName
// }
//
// console.log(topSalary(salaries))