describe("Rater", function () {
  var rater;

  beforeEach(function () {
    rater = new Rater();
  });

  it("should handle division by zero", function () {
    let upvotes = 0;
    let downvotes = 0;
    let result = rater.rateWithPoints(upvotes, downvotes);
    
    // result of division by zero in JS is : infinity
    expect(result).not.toEqual(Infinity);
    expect(result).toEqual(0);
  });

  it ("should give a better score to a better meme", function () {
    let basedMemeUpvotes = 123;
    let basedMemeDownvotes = 1;

    let unbasedMemeUpvotes = 1;
    let unbasedMemeDownvotes = 123;

    const basedMemeScore = rater.rateWithPoints(basedMemeUpvotes, basedMemeDownvotes);
    const unbasedMemeScore = rater.rateWithPoints(unbasedMemeUpvotes, unbasedMemeDownvotes);

    expect(basedMemeScore).not.toEqual(Infinity);
    expect(basedMemeScore).toBeGreaterThan(unbasedMemeScore);
  });
});
