import cors from 'cors';
import * as bodyParser from "body-parser";
import {db} from './databaseClient'
import {transform} from './helpers/userListTransformer';
import express from 'express';
const apiInstance = express()
const PORT = 8080;
apiInstance.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))

apiInstance.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

apiInstance.use(cors());

apiInstance.use(bodyParser.urlencoded({ extended: false }));
apiInstance.use(bodyParser.json());

apiInstance.get('/', (req, res) => {
    res.send({apiData: 'Real Time API Data'})
})

apiInstance.get('/userList', async (req, res, next) => {
    const response = await db.query(`SELECT * FROM users;`).then((result) => {
        return transform(result.rows)
    }).catch(next)

    console.log('response', response)
    res.send(response)
});

apiInstance.post('/userList', async (req, res) => {
    const data = req.body;
    await db.query(`INSERT INTO users (user_name, age, favorite_color, occupation, gender) VALUES  ('${data.userName}', '${data.age}', '${data.favoriteColor}', '${data.occupation}', '${data.gender}');`)
    res.send({
            message: 'We got your data!',
    })
})

apiInstance.post('/data', (req, res) => {
    const data = req.body;
    console.log('data in API', data);
    res.send({
        message: 'We got your data!',
        data
    })
})