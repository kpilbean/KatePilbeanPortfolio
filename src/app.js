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

// app.get('/about', function (req, res) {
//     res.send("<h1>Hello from the About page.</h1>");
// });


// SQLite Databases (Education, Projects, & Experience Sections) & Tests
const sqlite3 = require('sqlite3').verbose();

// EDUCATION SECTION
const EducationDB = new sqlite3.Database('../SQL-DB/EducationDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the EducationDB SQLite database.');
    }
});
module.exports = EducationDB;

EducationDB.serialize(() => {
    EducationDB.run('CREATE TABLE Education')
    EducationDB.each(`SELECT EducationId as id, SchoolName as name FROM Schools`, (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row.id + "\t" + row.name);
        }
    });
});

// SELECT * FROM [Education];

// EducationDB.all([], (error, rows) => {
//     if (error){
//         console.log(error);
//     }
//     res.send(rows);
// });
// res.render('../SQL-DB/EducationDB.sql', {Education:rows});

EducationDB.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the EducationDB connection.')
    }
});

// PROJECTS SECTION
const ProjectsDB = new sqlite3.Database('../SQL-DB/ProjectsDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ProjectsDB SQLite database.');
    }
});
module.exports = ProjectsDB;

ProjectsDB.serialize(() => {
    ProjectsDB.each(`SELECT ProjectId as id, ProjectName as name FROM Projects`, (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row.id + "\t" + row.name);
        }
    });
});

ProjectsDB.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the ProjectsDB connection.')
    }
});

// EXPERIENCE SECTION
const ExperienceDB = new sqlite3.Database('../SQL-DB/ExperienceDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ExperienceDB SQLite database.');
    }
});
module.exports = ExperienceDB;

ExperienceDB.serialize(() => {
    ExperienceDB.each(`SELECT ExperienceId as id, ExperienceName as name FROM Experience`, (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row.id + "\t" + row.name);
        }
    });
});

ExperienceDB.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the ExperienceDB connection.')
    }
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


app.listen(port, () => {
    console.log("The server is running on port " + port + ".");
});
