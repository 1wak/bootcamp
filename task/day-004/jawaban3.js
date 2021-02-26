function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = randomInt(500, 3000);
let b = randomInt(500, 3000);
let c = randomInt(500, 3000);

const saveToCloud = () => {
  let promise = new Promise((resolve) => {
    setTimeout(resolve, a, `Save to cloud success in ${a}ms`);
  });

  return promise;
};

const sendNotification = () => {
  let promise2 = new Promise((resolve) => {
    setTimeout(resolve, b, `Send notif dengan delay ${b} ms`);
  });

  return promise2;
};

const fetchNews = () => {
  let promise3 = new Promise((resolve) => {
    setTimeout(resolve, c, `Hot news, posted ${c}ms ago`);
  });

  return promise3;
};

const run1 = async (a) => {
  const q = await saveToCloud(a);

  return q;
};

const run2 = async (b) => {
  const w = await sendNotification(b);

  return w;
};

const run3 = async (c) => {
  const e = await fetchNews(c);

  return e;
};

run1().then((result) => console.log(result));
run2().then((result) => console.log(result));
run3().then((result) => console.log(result));
