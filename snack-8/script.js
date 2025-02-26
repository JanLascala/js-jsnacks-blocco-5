const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i]
  if (students.class === "3C") {
    console.log(thisStudent)
  }
}


function class3C(clas) {
  return clas.class === `3C`
}

const marioLanciclass = students.find(class3C)
console.log(marioLanciclass)


let id = 2;

let prop = "classe";

let res = students.find(item => item.id === id);
if (res) console.log(res[prop]);

function getPropertyValue(objectID) {
  for (const obj of students) {
    if (obj.id == objectID) {
      return obj.class;
    } else {
      continue;
    }
  }
  return null;
}
console.log(getPropertyValue(1));


// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'