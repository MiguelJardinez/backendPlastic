const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plastic',
  port: 3306
});

connection.connect( err => {
  if(err) throw err;
  console.log('Base de datos conectada exitosamente')
});

module.exports = connection; 