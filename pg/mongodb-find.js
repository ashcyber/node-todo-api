const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  const db = client.db('TodoApp');



  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todo ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();

});
