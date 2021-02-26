const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let a = randomInt(500, 3000);
let b = randomInt(500, 3000);
let c = randomInt(500, 3000);

const saveToCloud = (callback) => {
  setTimeout(() => {
    callback(`Save to cloud success in ${a}ms`);
  }, a);
};

const sendNotification = (callback) => {
  setTimeout(() => {
    callback(`Send notif dengan delay ${b} ms`);
  }, b);
};

const fetchNews = (callback) => {
  setTimeout(() => {
    callback(`Hot news, posted ${c}ms ago`);
  }, c);
};

saveToCloud((s) => {
  console.log(s);
  sendNotification((s2) => {
    console.log(s2);
    fetchNews((s3) => {
      console.log(s3);
    });
  });
});
