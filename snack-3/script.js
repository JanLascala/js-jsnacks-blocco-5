const numbers = [2, 8, 4, 7, 2, 87];

function numbplusone(num) {
    return num + 1
}

const newnumbers = numbers.map(numbplusone)

console.log(newnumbers)


// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]




//personal

const numb = [4, 6, 8, 10];

function numberdivided(num) {
    return num / 2
}

const divided = numb.map(numberdivided)

console.log(divided)

const firstNumbersdivided = numbers.map(numberdivided)

console.log(firstNumbersdivided)