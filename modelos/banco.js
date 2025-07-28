const mysql = require('mysql2/promise');
require('dotenv').config();

const banco = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USUARIO,
  password: process.env.DB_SENHA,
  database: process.env.DB_NOME
});

module.exports = banco;
