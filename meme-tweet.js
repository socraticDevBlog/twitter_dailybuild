const data = require("./meme-data");
const util = require("./utils");
const Rater = require("./Rater");
import { TweetPoster } from "./tweet-module";

const meme = data[util.randomizer(1, Object.keys(data).length)];
let rater = new Rater();

const message = `today's meme is "${meme.title}" from ${
  meme.author
} scoring at ${rater.rateWithPoints(meme.ups, meme.downs)} 
on the dailybuild's danknessmeter: dont tell ur mom ->${meme.media}`;

let posted = new TweetPoster(message);
