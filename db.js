const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sergs_drones",
    password: "Ruses6ujthes6_"
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  
  module.exports = db;