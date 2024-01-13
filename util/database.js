const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; //underscore means used for internal files only

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://jozefw:My-mongo05@testcluster.0be6rii.mongodb.net/',{useUnifiedTopology: true}
  )
    .then(client => {
      console.log('Connected!');

      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
