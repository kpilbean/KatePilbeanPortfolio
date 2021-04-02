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


// Education, Projects, Experience Tables from SQLite DBs & Tests
const sqlite3 = require('sqlite3').verbose();
// const assert = require('assert');

// describe('Unit Test', function () {
//     it('should return number of charachters in a string', function () {
//            assert.equal("Hello".length, 4);
//        });
//     it('should return first charachter of the string', function () {
//            assert.equal("Hello".charAt(0), 'H');
//        });
//    });

// Education Section
const EducationDB = new sqlite3.Database('./SQL-DB/EducationDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the EducationDB SQLite database.');
    }
})
module.exports = EducationDB;

app.get("/education", (req, res) => {
    const EducationSQL = 'SELECT * FROM Education';
    EducationDB.all(EducationSQL, [], (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            res.render('index', {Education:rows} );
        }
    });
})

function EducationTest () {
    EducationId = 1,
    SchoolName = "Bellarmine University"
};
module.exports.EducationTest = EducationTest;

// app.post("/educationDetails", (req, res) => {
//     const EduInput = new EducationDetails(req.body);
//     EduInput.save()
//         .then(item => {
//             res.send("Thank you! Your education details were successfully submitted.");
//         })
//         .catch(err => {
//             res.send(400).send("I'm sorry, your submission was unsuccessful.");
//         });
// });


// Projects Section
const ProjectsDB = new sqlite3.Database('./SQL-DB/ProjectsDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ProjectsDB SQLite database.');
    }
})
module.exports = ProjectsDB;

app.get('/projectsDetails', (req, res) => {
    const ProjectsSQL = 'SELECT * FROM Projects';
    ProjectsDB.all(ProjectsSQL, [], (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            res.render('index', {Projects:rows} );
        }
    });
})

function ProjectsTest () {
    ProjectId = 1,
    ProjectName = "JPs Porcelain Punishers"
};
module.exports.ProjectsTest = ProjectsTest;

// Experience Section
const ExperienceDB = new sqlite3.Database('./SQL-DB/ExperienceDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to the ExperienceDB SQLite database.');
    }
})
module.exports = ExperienceDB;

app.get("/experienceDetails", (req, res) => {
    const ExperienceSQL = 'SELECT * FROM Experience';
    ExperienceDB.all(ExperienceSQL, [], (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            res.render('index', {Experience:rows} );
        }
    });
})

function ExperienceTest () {
    ExperienceId = 1,
    ExperienceName = "City of Creekside"
};
module.exports.ExperienceTest = ExperienceTest;


// MongoDB Contact Request Form & Test
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/contact-requests");
mongoose.Promise = global.Promise;

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
        })
});


// LocalHost Setup
app.listen(port, () => {
    console.log("The server is running on port " + port + ".");
});
