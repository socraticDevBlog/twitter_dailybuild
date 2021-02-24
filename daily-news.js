const axios = require("axios");
const util = require("./utils");

const { NEWS_API_KEY } = process.env;

const EXLUDED_DOMAINS_PARAMS = 'excludeDomains=mashable.com,techcrunch.com,slashdot.org,engadget.com';
const Q_STR = 'q=programming%20and%20language';

const URL = `https://newsapi.org/v2/everything?${EXLUDED_DOMAINS_PARAMS}&${Q_STR}&sortBy=relevancy&apiKey=${NEWS_API_KEY}`;

axios
  .get(URL)
  .then((response) => {
    let data = response.data;
    const randomId = util.randomizer(0, Object.keys(data.articles).length);

    let article = data.articles[randomId];
    let msg = article.title;
    msg += " " + article.url + " 🤖tweeted by a friendly bot🕊️";
    let urlToImage = article["urlToImage"];

    console.log(`msg: ${msg}`);
    console.log(`image url: ${urlToImage}`);

    postTweet(msg, urlToImage);
  })
  .catch((error) => {
    console.log(error);
  });

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
