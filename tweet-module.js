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

class TweetPoster {
    constructor(msg) {
        this.msg = msg;
        if (this.msg) {
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

module.exports = {
  TweetPoster: TweetPoster,
};
