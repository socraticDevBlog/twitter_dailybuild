describe("Rater", function () {
  var rater;

  beforeEach(function () {
    rater = new Rater();
  });

  it("should handle division by zero", function () {
    let upvotes = 0;
    let downvotes = 0;

    // result of division by zero in JS is : infinity
    const infinity = Infinity;

    let result = rater.rateWithPoints(upvotes, downvotes);

    expect(result).not.toEqual(infinity);
    expect(result).toEqual(0);
  });

  it ("should give a better score to a better meme", function () {
    let basedMemeUpvotes = 123;
    let basedMemeDownvotes = 1;

    let unbasedMemeUpvotes = 1;
    let unbasedMemeDownvotes = 123;

    const basedMemeScore = rater.rateWithPoints(basedMemeUpvotes, basedMemeDownvotes);
    const unbasedMemeScore = rater.rateWithPoints(unbasedMemeUpvotes, unbasedMemeDownvotes);

    expect(basedMemeScore).toBeGreaterThan(unbasedMemeScore);
  });
});
