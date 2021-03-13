const fs = require("fs");
const path = require("path");

console.log("sanity")

const database = fs.readFileSync(path.join(__dirname,'/userDatabase.js'), 'utf8', (err,data) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(data);
  return data;
});

console.log(database[0])

// console.log(JSON.parse(database));
// const findById = (id) => {
//   const user = database.find((user) => user.id === id);
//   if (user) {
//     return user;
//   }
//   throw new Error(`Couldn't find user with id: ${id}`);
// }

// console.log(findById(1));