const fs = require("fs");
const path = require("path");

const database = fs.readFileSync(path.join(__dirname,'/userDatabase.js'), 'utf8', (err,data) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(data);
  return data;
});
// const database = [
//   {
//     id: 1,
//     name: "Jimmy Smith",
//     email: "jimmy123@gmail.com",
//     password: "jimmy123!",
//   },
//   {
//     id: 2,
//     name: "Johnny Doe",
//     email: "johnny123@gmail.com",
//     password: "johnny123!",
//   },
//   {
//     id: 3,
//     name: "Jonathan Chen",
//     email: "jonathan123@gmail.com",
//     password: "jonathan123!",
//   },
// ];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  createOne: (id, name, email ) => {
    console.log
  }
};

module.exports = { database, userModel };
