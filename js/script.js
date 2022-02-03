"use strict"
function testBlock()
{
let userEyesColor = 'green';

console.log(userEyesColor);
}
testBlock();

console.log('----------------------');

function testBlock1()
{
    let user;
    let userName = 'Вася';
    user = userName;
    console.log(user);
}
testBlock1();

console.log('----------------------');

function ex1() {
    let num = 0;
    while (num < 6) {
        if (num == 0) {
            num++
            continue;
        }
        console.log(num);
        num++
    }
}
ex1();

console.log('----------------------');

function ex2()
{
    let num = 0;
    while (num < 5) {
        num++;
        console.log(num);
    }
}
ex2();

console.log('----------------------');

function ex3()
{
    let num = 1;
    do {
        console.log(num);
        num++;
    }
    while (num < 6);
}
ex3();

console.log('----------------------');

function ex4()
{
    for(let num = 1; num < 6; num++)
    {
        console.log(num);
    }
}
ex4();

console.log('----------------------');














