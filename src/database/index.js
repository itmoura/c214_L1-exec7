const mongoose = require('mongoose');

const uri =
  'mongodb+srv://user:MTrbFygF0Wxy2zB9@cluster0.rq0as4n.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
