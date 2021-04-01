CREATE TABLE [Projects] (  
    [ProjectId] INTEGER  NOT NULL PRIMARY KEY,  
    [ProjectName] NVARCHAR(50)  NULL  
    [DescriptionName] NVARCHAR(50) NOT NULL,  
    [ProgramsUsed] INTEGER NULL,
);  

INSERT INTO Projects VALUES(1, 'JPs Porcelain Punishers', 'Website for fundraising team information, pictures, event details, registration forms, and donation links.', 'HTML, CSS, JavaScript');
INSERT INTO Projects VALUES(2, 'Portfolio', 'Website to be used as resume, portfolio, and contact request.', 'HTML, CSS, JavaScript, SQLite, MongoDB');


-- CREATE TABLE [Projects] (  
--     [ProjectId] INTEGER  NOT NULL PRIMARY KEY,  
--     [ProjectName] NVARCHAR(50)  NULL  
-- );  

-- INSERT INTO Projects VALUES(1, 'JPs Porcelain Punishers');
-- INSERT INTO Projects VALUES(2, 'Portfolio');


-- CREATE TABLE [Descriptions] (  
--     [DescriptionId] INTEGER  PRIMARY KEY NOT NULL,  
--     [DescriptionName] NVARCHAR(50) NOT NULL,  
--     [ProjectId] INTEGER  NULL, 
--     [ProgramsUsed] INTEGER NULL,
--     FOREIGN KEY(ProjectId) REFERENCES Projects(ProjectId)
-- );  

-- INSERT INTO Descriptions VALUES(1, 'Website for fundraising team information, pictures, event details, registration forms, and donation links.', 1, 'HTML, CSS, JavaScript');
-- INSERT INTO Descriptions VALUES(2, 'Website to be used as resume, portfolio, and contact request.', 2, 'HTML, CSS, JavaScript, SQLite, MongoDB');
