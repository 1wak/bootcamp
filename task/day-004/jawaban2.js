function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveToCloud() {
  const delay = randomInt(500, 3000);

  setTimeout(() => {
    console.log(`Save to cloud success in ${delay}ms`);
  }, delay);
}

function sendNotification(callback) {
  const delay = randomInt(500, 3000);

  setTimeout(() => {
    console.log(`Hi you got a new notification ${delay}ms ago`);
    callback();
  }, delay);
}
function fetchNews() {
  const delay = randomInt(500, 3000);

  setTimeout(() => {
    console.log(`Hot news, trending ${delay}ms ago`);
  }, delay);
}

saveToCloud();
sendNotification(fetchNews);
