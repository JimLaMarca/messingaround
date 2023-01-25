const { Client } = require("pg");

const db = new Client({
            host:"db",
            user: "postgres",
            port: 5432,
            password: "postgres",
            database: "messingaround"
        });
db.connect()


module.exports = {
    db
}