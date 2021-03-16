const fs = require("fs");
const path = require("path");
const database = require("./userDatabase.js");



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
  findBySocailLoginId: (id) => {
    let user = database.find(user => user.id === id);
    if (user) {
      return user;
    } 
    return "NOT_FOUND";
  },
  createOne: (newId, newName, newEmail ) => {

    const newUser = 
    {
      id: newId,
      name: newName,
      email: newEmail,
      password: "",
      role: 'user'
    }
    database.push(newUser);
    const fileUpateData = `const database = 
    ${JSON.stringify(database)}
    module.exports = database;`;
    fs.writeFile( path.normalize(path.join(__dirname,'userDatabase.js')), fileUpateData, (err) => {if (err) throw err; return;})
    return newUser;
  }
};

module.exports = { database, userModel };
