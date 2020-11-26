const data = require("./meme-data");

const firstKey = 1;
const numberItems = Object.keys(data).length;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// sebbu's algo
function danknessoMeter(ups, downs) {
  let dividend = ups - downs;
  let divisor = ups + downs;
  return dividend / divisor != 0 ? divisor : 1;
}

const meme = data[randomIntFromInterval(firstKey, numberItems)];
const message = `today's meme is "${meme.title}" from ${
  meme.author
} scoring at ${danknessoMeter(meme.ups, meme.downs)} 
on the dailybuild's danknessmeter: dont tell ur mom ->${meme.media}`;

let tweeter = require("./tweet-module");
let posted = new tweeter.TweetPoster(message);
