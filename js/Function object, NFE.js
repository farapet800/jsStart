// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
//
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
    let count = 0;

    function counter () {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter()

console.log( counter() );
console.log( counter() );

counter.set(10);

console.log( counter() );



counter.decrease();
counter.decrease();


console.log( counter() );
