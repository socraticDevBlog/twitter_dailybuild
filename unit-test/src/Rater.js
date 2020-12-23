// sebbu's algo
function danknessoMeter(ups, downs) {
  let dividend = ups - downs;
  let divisor = ups + downs;

  // original
  return dividend / divisor != 0 ? divisor : 1;

  //dailykoder's suggestion
  // return divisor !== 0 ? dividend/divisor : 0;
}

class Rater {
  constructor() {}
  rateWithPoints(upvotes, downvotes) {
    return danknessoMeter(upvotes, downvotes);
  }
}
