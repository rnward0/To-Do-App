const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: 'postsqlpass'
});
  
client.connect()
  .then(() => {
    console.log("Connected to postgres!");
  })  
  .catch(err => console.log(err));

module.exports = client;