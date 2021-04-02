//test Projects section to return list of {ProjectName} entries
const expect = require('chai').expect;

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
