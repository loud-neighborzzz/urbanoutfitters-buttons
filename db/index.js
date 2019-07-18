const mongoose = require('mongoose');
const mongoUri = 'mongodb://mongo:27017/buttons';
const db = mongoose.connect(mongoUri,  { useNewUrlParser: true });

module.exports = db;

// const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/buttons';
// const db = mongoose.connect(mongoUri);

// module.exports = db;

