const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let users = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    const user = req.body;

    // Output the book to the console for debugging
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));