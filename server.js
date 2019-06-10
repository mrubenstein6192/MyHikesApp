const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(logger('dev'));

const routes = require('./routes');
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/my-hikes-app', {
  useNewUrlParser: true
});

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));