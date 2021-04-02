# KatePilbeanPortfolio
My portfolio website

This will be my portfolio/resume website.  

My plan is to have separate sections (like a resume does) that I can add items to built-in SQLite databases via express/node and to have a request contact form that user can send their info to MongoDB.

For the Full-Stack JavaScript 2 CODE Louisville class project, I plan to use the following things to meet requirements:
1. "Contact Me" form with multiple fields (2 name, 1 email, and 1 message) and submit button. Connected to MongoDB on local host 27017 with endpoint /contactMe. Tests that all fields are submitted correctly and returns a success or fail message either way.
2. "Education" section pulls info from a SQLite database. Tests that database opens and pulls first couple objects of info successfully.
3. "Projects" section pulls info from a SQLite database. Tests that database opens and pulls first couple objects of info successfully.
4. "Experience" section pulls info from a SQLite database. Tests that database opens and pulls first couple objects of info successfully.

To easily access this site, you can run it locally; the site will run on localhost port 3000. This site uses node, express, Mocha, Chai, SQLite, and MongoDB(running on localhost 27017).