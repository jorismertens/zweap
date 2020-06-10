const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep users
let users = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    const user = req.body;

    // Output the user to the console for debugging
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
});


app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => console.log(`user-api listening op port${port}!`));