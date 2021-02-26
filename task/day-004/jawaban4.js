const { default: PQueue } = require("p-queue");
const queue = new PQueue({ concurrency: 1 });

const myPromises = [
  () =>
    new Promise((resolve) => {
      for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
          resolve(i), console.log(i);
        }, 1000);
      }
    }),
  () =>
    new Promise((resolve) => {
      resolve("Done"), console.log("Done");
    }),
];

queue.addAll(myPromises).then(console.log);

// const promise = new Promise((resolve) => {
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       resolve(i), console.log(i);
//     }, 1000);
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => console.log("Done"))
//   .catch((err) => console.log(err));
