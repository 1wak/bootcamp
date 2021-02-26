function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//SaveToCloud
const saveToCloud = () => {
  return new Promise((resolve, reject) => {
    const delay = randomInt(500, 3000);

    setTimeout(() => {
      resolve(`Save to cloud success in ${delay}ms`);
      reject(new Error("err"));
    }, delay);
  });
};
//SendNotification
const sendNotification = () => {
  return new Promise((resolve, reject) => {
    const delay = randomInt(600, 3000);

    setTimeout(() => {
      resolve(`Hi you got a new notification ${delay}ms ago`);
      reject(new Error("err"));
    }, delay);
  });
};

const fetchNews = () => {
  return new Promise((resolve, reject) => {
    const delay = randomInt(700, 3000);

    setTimeout(() => {
      resolve(`Hot news, trending ${delay}ms ago`);
      reject(new Error("err"));
    }, delay);
  });
};

// ------------------------------------------
// Get promise result
// ------------------------------------------

Promise.all([saveToCloud(), sendNotification(), fetchNews()]).then((values) => {
  console.log(values);
});
saveToCloud()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

saveToCloud();

sendNotification()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

sendNotification();

fetchNews()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

fetchNews();
