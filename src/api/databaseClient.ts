import {Client} from 'pg'

export const db = new Client({
            host:"db",
            user: "postgres",
            port: 5432,
            password: "postgres",
            database: "messingaround"
        });

db.connect()