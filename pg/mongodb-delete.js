const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  const db = client.db('TodoApp');
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



  // // Deleting multiple documents
  // db.collection('Todos').deleteMany({text: 'eat'}).then((result) => {
  //   console.log(result);
  // });
  //
  //
  // // Deleting findOneAndDelete
  // db.collection('Users').findOneAndDelete({
  //   text: "do angularJS"
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });
  //

  client.close();
});
