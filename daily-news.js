const axios = require("axios");
const util = require("./utils");
let tweeter = require("./tweet-module");

const { NEWS_API_KEY } = process.env;

const EXLUDED_DOMAINS_PARAMS =
  "excludeDomains=mashable.com,techcrunch.com,slashdot.org,engadget.com";

const SELECTED_LANGUAGES = "language=en";

const Q_STRINGS = [
  "programming%20and%20language",
  "linux",
  "JavaScript",
  "IRC",
  "web%20and%20development",
  "Go%20and%20programming%20or%20language",
  "rust%20and%20programming%20or%20language",
];

console.log(`topics: ${Q_STRINGS}`)

let query = Q_STRINGS[util.randomizer(0, Q_STRINGS.length)];
console.log(`query: ${query}`)
const URL = `https://newsapi.org/v2/everything?${SELECTED_LANGUAGES}&${EXLUDED_DOMAINS_PARAMS}&q=${query}&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;
console.log(`url to api: ${URL}`
axios
  .get(URL)
  .then((response) => {
    console.log(`response from api ${response.data}`)
    processAndPostTweet(response.data);
  })
  .catch((error) => {
    console.log(`query to news api failed: ${error}`);
  });

function processAndPostTweet(data) {
  let randomId = util.randomizer(0, Object.keys(data.articles).length);
  let article = data.articles[randomId];

  let msg = article.title;
  msg += " " + article.url + " tweeted by a 🤖";
  let urlToImage = article["urlToImage"];

  console.log(`tweet message: ${msg}`);
  console.log(`url to image: ${urlToImage}`);

  //if (urlToImage) {
  //  postTweetWithImage(msg, urlToImage);
  //} else {
  //  let _ = new tweeter.TweetPoster(msg);
  //}
}

function postTweetWithImage(msg, imgUrl) {
  let request = require("request").defaults({ encoding: null });

  request.get(imgUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      img = Buffer.from(body).toString("base64");

      let _ = new tweeter.TweetMediaPoster(msg, img);
    } else {
      console.log(`an error occured: ${error}`);
    }
  });
}
