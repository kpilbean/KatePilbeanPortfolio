const path = require('path');
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/contact-requests");

const contactSchema = new mongoose.Schema({ firstName: String, lastName: String, emailAddress: String, message: String });
const Request = mongoose.model("Request", contactSchema);

const publicFolder = path.join(__dirname, '../public');

app.use(express.static(publicFolder));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Kate Pilbean"
    });
});

app.get('/about', function (req, res) {
    res.send("<h1>Hello from the About page.</h1>");
});

app.post("/contactMe", (req, res) => {
    const userInput = new Request(req.body);
    userInput.save()
        .then(item => {
            res.send("Thank you! Your request was successfully submitted.");
        })
        .catch(err => {
            res.send(400).send("I'm sorry, your submission was unsuccessful.");
        });
});

app.listen(port, () => {
    console.log("The server is running on port " + port + ".");
})
