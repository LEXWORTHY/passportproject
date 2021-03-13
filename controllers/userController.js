const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

const createUser = (id,email) => {

}

const getUserByGitHubIdOrCreate = (profile) => {
  console.log("In getUserByGitHubIDorCreate");
  console.log(profile.id, profile.name);
  let user = userModel.findById(profile.id)
  if (user) {
    return user
  } 
  user = userModel.createOne(profile.id, profile.name, profile.email);
  return user;
};

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  getUserByGitHubIdOrCreate
};
