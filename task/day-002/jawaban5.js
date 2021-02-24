const arrAngka = [1,2,66,77,98,33,45,21,34,33,1,85,76,1,2,3,4,5,6,7,89,43,8,9,77,4,3,22,21,10,34];
// console.log(arrAngka.length)
const a = arrAngka.slice(0, 10);
// console.log(a.length);
const b = arrAngka.slice(10, 21);
const c = arrAngka.slice(21, arrAngka.length);

const groupA = a.sort((a, b) => b - a);
const groupB = b.sort((a, b) => b - a);
const groupC = c.sort((a, b) => b - a);

console.log('Group A: ', groupA);
console.log('Group B: ', groupB);
console.log('Group C: ', groupC);