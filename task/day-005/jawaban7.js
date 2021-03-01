// Bubble Sort

let x = [1, 3, 4, 1, 201, 100, 4, 7, 42, 85, 12, 583, 13, 104, 31, 76, 49];

const bSort = (x) => {
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < x.length - 1; i++) {
      if (x[i] > x[i + 1]) {
        [x[i], x[i + 1]] = [x[i + 1], x[i]];
        swap = true;
      }
    }
  }

  return x;
};

console.log("init:", x);
console.log("then: ", bSort(x));
