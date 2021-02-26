let myFirstPromise = new Promise((resolve, reject) => {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      resolve(console.log(i));
    }, 1000);
  }
});

myFirstPromise.then((nums) => {
  console.log(nums);
  console.log("Done");
});
