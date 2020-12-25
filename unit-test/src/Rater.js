const { danknessoMeter } = require("../../meme-tweet.js")

class Rater {
  constructor() {}
  rateWithPoints(upvotes, downvotes) {
      return upvotes - (downvotes * 2);
  }
}

module.exports = { Rater }