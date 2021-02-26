const axios = require("axios");
const fill = [];

function getPost() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 5,
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

function getUsers() {
  axios
    .get("https://jsonplaceholder.typicode.com/users", {
      params: {
        _limit: 5,
      },
    })
    .then((res) => console.log(res.data))
    .then((err) => console.log(err));
}

const isi = axios.all([getPost(), getUsers()]);

fill.push(isi);
console.log(fill);
