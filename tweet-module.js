const Twit = require("twit");

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = process.env;

const T = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET,
});

const max_char = 257;

class TweetPoster {
  constructor(msg) {
    this.msg = String(msg);
    if (this.msg && this.msg.length <= max_char) {
      T.post(
        "statuses/update",
        { status: this.msg },
        function (err, data, response) {
          if (err) {
            console.log("caught error", err.stack);
          } else {
            console.log(data);
          }
        }
      );
    }
  }
}

class TweetMediaPoster {
  constructor(base64encodedImg) {
    T.post(
      "media/upload",
      { media_data: base64encodedImg },
      function (err, data, response) {
        if (err) {
          console.log("caught error", err.stack);
        } else {
          console.log(data);
        }
      }
    );
  }
}

module.exports = {
  TweetPoster: TweetPoster,
  TweetMediaPoster: TweetMediaPoster,
};
