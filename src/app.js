const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const publicFolder = path.join(__dirname, '../public');

app.use(express.json());
app.use(express.static(publicFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home",
        name: "Kate Pilbean"
    });
});


// MongoDB Contact Request Form & Test
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/contact-requests");
const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    message: String
});
const Request = mongoose.model("Request", contactSchema);

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


// Education, Projects, Experience Tables from SQLite DBs & Tests
const sqlite3 = require('sqlite3').verbose();

// Education Section
const EducationDB = new sqlite3.Database('../SQL-DB/EducationDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the EducationDB SQLite database.');
    }
});
module.exports = EducationDB;

index: (req,res) => {
    let sql = 'SELECT *'
        sql += 'FROM Education'

    EducationDB.all(sql, [], (error, rows) => {
        if (error){
            console.log(error);
        }
        res.render('admin/index', {Education:rows});
    });
};

// Projects Section
const ProjectsDB = new sqlite3.Database('../SQL-DB/ProjectsDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ProjectsDB SQLite database.');
    }
});
module.exports = ProjectsDB;

index: (req,res) => {
    let sql = 'SELECT *'
        sql += 'FROM Projects'

    ProjectsDB.all(sql, [], (error, rows) => {
        if (error){
            console.log(error);
        }
        res.render('admin/index', {Projects:rows});
    });
};

// Experience Section
const ExperienceDB = new sqlite3.Database('../SQL-DB/ExperienceDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ExperienceDB SQLite database.');
    }
});
module.exports = ExperienceDB;

index: (req,res) => {
    let sql = 'SELECT *'
        sql += 'FROM Experience'

        ExperienceDB.all(sql, [], (error, rows) => {
            if (error){
                console.log(error);
            }
            res.render('admin/index', {Experience:rows});
        });
};

// LocalHost Setup
app.listen(port, () => {
    console.log("The server is running on port " + port + ".");
});
