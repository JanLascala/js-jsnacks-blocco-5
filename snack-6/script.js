const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

const zucchineLong = []
console.log(zucchineLong)
const zucchineShort = []
console.log(zucchineShort)

for (let i = 0; i < zucchine.length; i++) {
  if (zucchine.length > 15) {
    zucchineLong.push(zucchine[i]);
  } else {
    zucchineShort.push(zucchine[i])
  }

}

function longerzucc(zucc) {
  return zucc.length > 15
}
const major15 = zucchine.filter(longerzucc);
console.log(major15)

function shortzucc(zucc) {
  return zucc.length < 15
}
const minor15 = zucchine.filter(shortzucc);
console.log(minor15)






// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.