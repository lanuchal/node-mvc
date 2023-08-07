
const dotenv = require('dotenv');
const mysql = require('mysql2');
dotenv.config();
// dev or production
const mode = "production_kao"
var dbConfig;
switch (mode) {
    case "dev":
        dbConfig = {
            host: "localhost",
            user: "root",
            password: "",
            database: "test",
        };
        break;
    case "production_cmex":
        dbConfig = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        };
        break;
    default:
        dbConfig = {
            host: process.env.DB_HOST_KAO,
            user: process.env.DB_USER_KAO,
            password: process.env.DB_PASSWORD_KAO,
            database: process.env.DB_DATABASE_KAO,
        };
        break;
}


const db = mysql.createConnection(dbConfig);

module.exports = db;
