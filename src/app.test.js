const expect = require('chai').expect;

//test Experience section to return list of {ExperienceName} entries
describe('ExperienceTest', function () {
    const ExperienceTest = require('./experienceDetails').ExperienceTest;
    it('will return first experience on list', function () {
        ExperienceId = 1,
        ExperienceName = 'City of Creekside'
    });
    expect(ExperienceTest(0)).toBe("1, City of Creekside");
    }
)

if(ExperienceTest !== "1, City of Creekside") {
    throw new Error("ExperienceTest Failed.")
};

//test Education section to return list of {EducationName} entries
describe('EducationTest', function () {
    const EducationTest = require('./educationDetails').EducationTest;
    it('will return first education on list', function () {
        EducationId = 1,
        SchoolName = 'Bellarmine Univeristy'
    });
    expect(EducationTest(0)).toBe("1, Bellarmine University");
    }
)

if(EducationTest !== "1, Bellarmine University") {
    throw new Error("EducationTest Failed.")
};

//test Projects section to return list of {ProjectName} entries
describe('ProjectsTest', function () {
    const ProjectsTest = require('./projectsDetails').ProjectsTest;
    it('will return first project on list', function () {
        ProjectId = 1,
        ProjectName = 'JPs Porcelain Punishers'
    });
    expect(ProjectsTest(0)).toBe(1, 'JPs Porcelain Punishers');
    }
)

if(ProjectsTest !== '1, JPs Porcelain Punishers') {
    throw new Error("ProjectsTest Failed.")
};
