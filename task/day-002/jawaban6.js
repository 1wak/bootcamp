const arrAngka = [1,2,66,77,98,33,45,21,34,33,1,85,76,1,2,3,4,5,6,7,89,43,8,9,77,4,3,22,21,10,34];

const findMax = Math.max(...arrAngka);
console.log('Nilai Max: ', findMax);

const findMin = Math.min(...arrAngka);
console.log('Nilai Min: ', findMin);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sumAngka = arrAngka.reduce(reducer);
const findAvg = sumAngka / arrAngka.length || 0;
console.log('Rata-rata: ', findAvg);

const findMed = arr => {
    const med = Math.floor(arr.length / 2),
    nums = [...arr].sort((a,b) => a -b);
    return arr.length % 2 !== 0 ? nums[med] : (nums[med -1] + nums[med]) / 2;
};

console.log('Nilai Tengah: ', findMed(arrAngka))