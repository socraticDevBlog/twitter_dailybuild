const utilFct = require("./utils");
const data = require("./flat-earth-data");

const prefix = "https://globie-info.neet.cloud/";
const randomId = utilFct.randomizer(1, Object.keys(data).length);
let imgUrl = prefix + data[randomId].name;

var request = require("request").defaults({ encoding: null });

request.get(imgUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // payload = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
    payload = Buffer.from(body).toString("base64");
    let tweeter = require("./tweet-module");
    let posted = new tweeter.TweetMediaPoster(payload);
  }
});
