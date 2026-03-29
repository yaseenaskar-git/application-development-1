const mysql = require("mysql2/promise");

const pool = mysql.createPool({
host: "localhost",
user: "root",
password: "Iamtoca_18176@!",
database: "pt_applications.sql",
waitForConnections: true,
connectionLimit: 10
});

module.exports = pool;