CREATE TABLE [Education] (  
    [EducationId] INTEGER  NOT NULL PRIMARY KEY,  
    [SchoolName] NVARCHAR(50) NOT NULL,  
    [CertificateName] NVARCHAR(50) NOT NULL,
    [GradDate] DATE NOT NULL
);  

INSERT INTO Education VALUES(1, 'Bellarmine University', 'Bachelor of Arts in Liberal Studies', '2000-05-01');
INSERT INTO Education VALUES(2, 'CODE Louisville', 'Front-End Web Development-HTML, CSS, JavaScript', '2020-08-01');
INSERT INTO Education VALUES(3, 'CODE Louisville', 'JavaScript', '2020-11-01');
INSERT INTO Education VALUES(2, 'CODE Louisville', 'Fullstack JavaScript', '2021-04-01');



-- CREATE TABLE [Schools] (  
--     [SchoolId] INTEGER  NOT NULL PRIMARY KEY,  
--     [SchoolName] NVARCHAR(50)  NULL  
-- );  

-- INSERT INTO Schools VALUES(1, 'Bellarmine University');
-- INSERT INTO Schools VALUES(2, 'CODE Louisville');


-- CREATE TABLE [Certificates] (  
--     [CertificateId] INTEGER  PRIMARY KEY NOT NULL,  
--     [CertificateName] NVARCHAR(50) NOT NULL,  
--     [SchoolId] INTEGER  NULL, 
--     [GradDate] DATE NULL,
--     FOREIGN KEY(SchoolId) REFERENCES Schools(SchoolId)
-- );  

-- INSERT INTO Certificates VALUES(1, 'Bachelor of Arts in Liberal Studies', 1, '2000-05-01');
-- INSERT INTO Certificates VALUES(2, 'Front-End Web Development-HTML, CSS, JavaScript', 2, '2020-08-01');
-- INSERT INTO Certificates VALUES(3, 'JavaScript', 2, '2020-11-01');
-- INSERT INTO Certificates VALUES(4, 'Fullstack JavaScript', 2, '2021-04-01');