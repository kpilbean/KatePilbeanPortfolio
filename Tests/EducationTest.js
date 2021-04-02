//test Education section to return list of {EducationName} entries
const expect = require('chai').expect;

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

