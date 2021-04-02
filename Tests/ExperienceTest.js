//test Experience section to return list of {ExperienceName} entries
const expect = require('chai').expect;

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

