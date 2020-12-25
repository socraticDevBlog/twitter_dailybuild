const Rater = require('../Rater');

describe("rater", function() {
    it("should give more points for better memes than unbased ones", function() {
        const basedMeme = {
            'upvotes':123,
            'downvotes':1
        };

        const unbasedMeme = {
            'upvotes':1,
            'downvotes':123
        };

        var rater = new Rater();
        let basedMemePoints = rater.rateWithPoints(basedMeme.upvotes, basedMeme.downvotes);
        let unbasedMemePoints = rater.rateWithPoints(unbasedMeme.upvotes, unbasedMeme.downvotes);

        expect(basedMemePoints).toBeGreaterThan(unbasedMemePoints);
    });
});