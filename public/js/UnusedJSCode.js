
app.get('/about', function (req, res) {
    res.send("<h1>Hello from the About page.</h1>");
});


// Education Section table info pulled from MongoDB
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/my-portfolio");
mongoose.Promise = global.Promise;

const educationSchema = new mongoose.Schema({
    SchoolName: String,
    CertificateName: String,
    GradDate: Date
});
const EduRequest = mongoose.model("Education Details", educationSchema);

app.get("/educationDetails", (req, res) => {
    const EduInput = new EducationDetails(req.body);
    EduInput.save()
        .then(item => {
            res.send("Thank you! Your education details were successfully submitted.");
        })
        .catch(err => {
            res.send(400).send("I'm sorry, your submission was unsuccessful.");
        });
});

{/* <form method="get" action="/educationDetails">
    <input type="text" name="SchoolName" placeholder="School" required>
    <input type="text" name="CertificateName" placeholder="Certificate" required></ br>
    <input type="date" name="GradDate" placeholder="Graduation Date" required></ br>
</form> */}


// SQLite Databases (Education, Projects, & Experience Sections) & Tests
const sqlite3 = require('sqlite3').verbose();

// EDUCATION SECTION
const EducationDB = require('../SQL-DB/EducationDB.db', (err) => {
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

EducationDB.all([], (error, rows) => {
    if (error){
        console.log(error);
    }
    res.send(rows);
});
res.render('../SQL-DB/EducationDB.sql', {Education:rows});

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

