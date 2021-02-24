const arrAngka = [-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98];

const findMax = Math.max(...arrAngka);
console.log('Max: ', findMax);

const findMin = Math.min(...arrAngka);
console.log('Min: ', findMin);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sumAngka = arrAngka.reduce(reducer);
// console.log(sumAngka);

const findMed = arr => {
    const med = Math.floor(arr.length / 2),
    nums = [...arr].sort((a,b) => a -b);
    return arr.length % 2 !== 0 ? nums[med] : (nums[med -1] + nums[med]) / 2;
};

console.log('Median: ', findMed(arrAngka))

const findAvg = sumAngka / arrAngka.length;
console.log('Average: ', findAvg)
