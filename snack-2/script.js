const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
console.log(people)

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

people.forEach(person => {
  console.log(person.name);
});

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'