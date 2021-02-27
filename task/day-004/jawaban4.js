// Hasil 1,2,3,Done tapi pakai library
// Solved undefined
// const { default: PQueue } = require("p-queue");
// const queue = new PQueue({ concurrency: 1 });

// const myPromises = [
//   () =>
//     new Promise((resolve) => {
//       for (let i = 1; i <= 3; i++) {
//         setTimeout(() => {
//           resolve(console.log(i));
//         }, 1000);
//       }
//     }),
//   () =>
//     new Promise((resolve) => {
//       resolve(console.log("Done"));
//     }),
// ];

// queue.addAll(myPromises).then((res) => {
//   console.log;
//   return res;
// });

// Hasil 1,2,3,Undifined, Done
// Solved undefined
const promise = new Promise((resolve) => {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      resolve(console.log(i));
    }, 1000);
  }
});

promise
  .then((data) => {
    console.log;
    return data;
  })
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));

// Hasil 1,2,3,Done,NaN
// Unsolved how to handle number to string
// const count = () => {
//   return new Promise((resolve) => {
//     for (let i = 1; i <= 3; i++) {
//       setTimeout(() => {
//         resolve(console.log(i));
//       }, 1000);
//     }
//   });
// };

// const codeDone = (cnt) => {
//   return new Promise((resolve) => {
//     resolve(cnt + console.log("Done"));
//   });
// };

// count()
//   .then((res) => {
//     return codeDone(res);
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.all
// Unsolved
// const count = () => {
//   return new Promise((resolve) => {
//     for (let i = 1; i <= 3; i++) {
//       setTimeout(() => {
//         resolve(console.log(i));
//       }, 1000);
//     }
//   });
// };

// const codeDone = () => {
//   return new Promise((resolve) => {
//     resolve(console.log("Done"));
//   });
// };

// Promise.all([count(), codeDone()]).then(([res1, res2]) => {
//   // console.log(res1 + res2);
//   console.log;
//   return res1 + res2;
// });
