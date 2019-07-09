const express = require('express');
const routes = require('./routes');
const passportSetup = require('./middleware/passport-setup');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/my-hikes-app', {
  useNewUrlParser: true
});

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));