const data = require("./meme-data");
const util = require("./utils");

// sebbu's algo
function danknessoMeter(ups, downs) {
  let dividend = ups - downs;
  let divisor = ups + downs;
  return dividend / divisor != 0 ? divisor : 1;
}

const meme = data[util.randomizer(1, Object.keys(data).length)];

const message = `today's meme is "${meme.title}" from ${
  meme.author
} scoring at ${danknessoMeter(meme.ups, meme.downs)} 
on the dailybuild's danknessmeter: dont tell ur mom ->${meme.media}`;

let tweeter = require("./tweet-module");
let posted = new tweeter.TweetPoster(message);
