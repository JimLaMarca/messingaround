const cors = require('cors');
const bodyParser = require('body-parser');
const {db} = require('./databaseClient')
const {transform} = require("./helpers/userListTransformer");
const apiInstance = require('express')()
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

apiInstance.get('/userList', async (req, res) => {
    const {rows: userData} = await db.query(`SELECT * FROM users;`)
    const formattedUserData = transform(userData)
    res.send(
        formattedUserData
    )
})

apiInstance.post('/userList', async (req, res) => {
    const data = req.body;
    const {rows, ...rest} = await db.query(`INSERT INTO users (user_name, age, favorite_color, occupation, gender) VALUES  ('${data.userName}', '${data.age}', '${data.favoriteColor}', '${data.occupation}', '${data.gender}');`)
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