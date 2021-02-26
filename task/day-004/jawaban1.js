const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let a = randomInt(500, 3000);
let b = randomInt(500, 3000);
let c = randomInt(500, 3000);

const saveToCloud = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Save to cloud success in ${a}ms`);
      reject(new Error("Bad connection..."));
    }, a);
  });
};

const sendNotification = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You've got one new notification ${b}ms ago`);
      reject(new Error("Bad connection..."));
    }, b);
  });
};

const fetchNews = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hot news, posted ${c}ms ago`);
      reject(new Error("Bad connection..."));
    }, c);
  });
};

Promise.all([saveToCloud(), sendNotification(), fetchNews()]).then((values) => {
  console.log(values.join(" "));
});
