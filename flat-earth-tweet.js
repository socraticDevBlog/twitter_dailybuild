const utilFct = require("./utils");
const data = require("./flat-earth-data");

const messages = [
  "omg! another one for the globies 🌐",
  "flat earthers: get real ... quick!!💨",
  "conspiracy is just dumb 🤦",
  "🧙🏾 do u also believe in cooties, flat-earthers? 😛",
  "🧭 get real. it's about time, globies⌛"
];

const prefix = "https://globie-info.neet.cloud/";
const randomId = utilFct.randomizer(1, Object.keys(data).length);
let imgUrl = prefix + data[randomId].name;

var request = require("request").defaults({ encoding: null });

const tweetMsg = messages[utilFct.randomizer(0, messages.length - 1)];

request.get(imgUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    img = Buffer.from(body).toString("base64");
    let tweeter = require("./tweet-module");
    let posted = new tweeter.TweetMediaPoster(tweetMsg, img);
  }
});
