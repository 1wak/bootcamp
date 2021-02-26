// const axios = require("axios");
// const fill = [];

// function getPost() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res));
// }

// function getUsers() {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => console.log(res));
// }

// const isi = axios.all([getPost(), getUsers()]);

// fill.push(isi);
// console.log(fill);

// Example
// var result = [
//   ...[getPost(), getUser]
//     .reduce(
//       (m, a) => (
//         a.forEach(
//           (o) =>
//             (m.has(o.ObjId) && Object.assign(m.get(o.ObjId), o)) ||
//             m.set(o.ObjId, o)
//         ),
//         m
//       ),
//       new Map()
//     )
//     .values(),
// ];

// console.log(result);

// const res = {};
