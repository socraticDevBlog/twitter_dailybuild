const axios = require("axios");
const util = require("./utils");

const { NEWS_API_KEY } = process.env;

const EXLUDED_DOMAINS_PARAMS =
  "excludeDomains=mashable.com,techcrunch.com,slashdot.org,engadget.com";

const Q_STRINGS = [
  "programming%20and%20language",
  "linux",
  "JavaScript",
  "IRC",
  "web%20and%20development",
  "Go%20and%20programming%20or%20language",
  "rust%20and%20programming%20or%20language",
];

let query = Q_STRINGS[util.randomizer(0, Q_STRINGS.length)];
const URL = `https://newsapi.org/v2/everything?${EXLUDED_DOMAINS_PARAMS}&q=${query}&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;

axios
  .get(URL)
  .then((response) => {
    processAndPostTweet(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

function processAndPostTweet(data) {
  let randomId = util.randomizer(0, Object.keys(data.articles).length);
  let article = data.articles[randomId];
  
  let msg = article.title;
  msg += " " + article.url + " tweeted by a 🤖";
  let urlToImage = article["urlToImage"];

  postTweet(msg, urlToImage);
}

function postTweet(msg, imgUrl) {
  let request = require("request").defaults({ encoding: null });

  request.get(imgUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      img = Buffer.from(body).toString("base64");
      let tweeter = require("./tweet-module");
      let _ = new tweeter.TweetMediaPoster(msg, img);
    }
  });
}
