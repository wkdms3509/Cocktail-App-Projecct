const { createPool } = require('mysql2/promise')

const pool = createPool({
  host: 'mysql',
  user: 'engineer',
  password: '1234',
  port: 3306,
  database: 'testcocktailsdb',
})

// export { pool }
module.exports = { pool }

// import mysql from 'mysql'

// createConnection : 접속하고 싶은 DB정보 입력
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'sorksnrnrp',
//   port: 3306,
//   database: 'testcocktailsdb',
// })

// // DB 연결

// connection.connect()

// CREATE TABLE testcocktail (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     type VARCHAR(50) NOT NULL,
//     img VARCHAR(255) NOT NULL,
//     description VARCHAR(500),
//     alcohol VARCHAR(50),
//     sugar VARCHAR(50),
//     sourness VARCHAR(50),
//     bitter VARCHAR(50),
//     recipe VARCHAR(255),
//     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
