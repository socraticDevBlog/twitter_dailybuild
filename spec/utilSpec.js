const util = require('../utils');

describe("randomizer", function() {
    it("should return a integer withingbounds", function() {
        const lowerbound = 123;
        const upperbound = 789;

        let randomNumber = util.randomizer(lowerbound, upperbound);
        expect(randomNumber).toBeGreaterThanOrEqual(lowerbound);
        expect(randomNumber).toBeLessThanOrEqual(upperbound);
    });
});