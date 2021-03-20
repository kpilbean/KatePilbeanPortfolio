const path = require('path');
const express = require("express");
const app = express();

const publicFolder = path.join(__dirname, '../public');

app.use(express.static(publicFolder));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Kate Pilbean"
    });
})

app.get('/about', function (req, res) {
    res.send("<h1>Hello from the About page.</h1>");
})

app.listen(3000, () => {
    console.log("The server is running on port 3000.");
})
