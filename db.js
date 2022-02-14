const Pool = require('pg').Pool
const pool = new Pool({ // В конструктор передаем объект с настройками
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

module.exports = pool;