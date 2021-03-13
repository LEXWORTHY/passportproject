const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var GitHubStrategy = require('passport-github2').Strategy;
const userController = require("../controllers/userController");

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

let githubLogin = new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:8000/auth/github/callback"
},
function(accessToken, refreshToken, profile, cb) {
  let user = userController.getUserByGitHubIdOrCreate(profile)
  return cb(null, user)
}
)

module.exports = passport.use(githubLogin).use(localLogin);
