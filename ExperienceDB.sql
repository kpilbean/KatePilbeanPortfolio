CREATE TABLE [Experience] (  
    [ExperienceId] INTEGER  NOT NULL PRIMARY KEY,  
    [ExperienceName] NVARCHAR(50)  NULL  
);  

INSERT INTO Experience VALUES(1, 'City of Creekside');
INSERT INTO Experience VALUES(2, 'Trinity High School');
INSERT INTO Experience VALUES(3, 'Digital Promotions');


CREATE TABLE [Descriptions] (  
    [DescriptionId] INTEGER  PRIMARY KEY NOT NULL,  
    [DescriptionName] NVARCHAR(50) NOT NULL,  
    [ExperienceId] INTEGER  NULL, 
    [DetailedDuties] INTEGER NULL,
    [DateRange] INTEGER NULL,
    FOREIGN KEY(ExperienceId) REFERENCES Experience(ExperienceId)
);  

INSERT INTO Descriptions VALUES(1, 'Mayor', 1, 'City Mayor for city of 126 residential homes.', 'January 2021 - Present');
INSERT INTO Descriptions VALUES(2, 'Commissioner', 1, 'City Commissioner for city of 126 residential homes.', 'August 2020 - Present');
INSERT INTO Descriptions VALUES(3, 'Director of First Impressions/Reception', 2, 'First line contact for college-prepatory Catholic high school.', 'September 2020 - Present');
INSERT INTO Descriptions VALUES(4, 'Account Representative', 2, 'Sales representative of printing and promotional products for local company. Responsible for sales to and maintenance of corporate, school, athletic, and individual accounts.', 'February 2020 - Present');
