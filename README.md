# KatePilbeanPortfolio
My portfolio website

This will be my portfolio/resume website.  

My plan is to have separate sections (like a resume does) that I can add items to built-in SQLite databases via express/node and to have a request contact form that user can send their info to MongoDB.

For the Full-Stack JavaScript 2 CODE Louisville class project, I plan to use the following things to meet requirements:
1. "Contact Me" form with multiple fields (2 name, 1 email, and 1 message) and submit button. Connected to MongoDB on local host 27017 with endpoint /contactMe. Tests that all fields are submitted correctly and returns a success or fail message in the browser either way.
2. "Education" section pulls info from a SQLite database using endpoint /educationDetails. Tests that database opens and pulls first couple objects of info successfully.
3. "Projects" section pulls info from a SQLite database using endpoint /projectsDetails. Tests that database opens and pulls first couple objects of info successfully.
4. "Experience" section pulls info from a SQLite database using endpoint /experienceDetails. Tests that database opens and pulls first couple objects of info successfully.
5. Tests that project is running on localhost:3000 as well as successful connections to all three SQL databases and returns console log messages indicating successful attempts.

To easily access this site, you can run it locally; the site will run on localhost port 3000. This site uses node, express, Mocha, Chai, SQLite, and MongoDB(running on localhost 27017). You can use the Postman app to view/access features of the site.

To run locally: 
    1) use node version 12.19.0
    2) run npm install
    3) install express, mongo, mocha, chai, sqlite
    4) run npm start