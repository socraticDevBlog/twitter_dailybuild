const Twit = require("twit");

// keys are already taken care of. github action will push them in here for us
//
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

// populate the message you want to tweet, they submit a pull-request
// ** if there is already a message in there: replace it with yours
//
var message = "any members of #dailybuild community can tweet from this account via github :)"; //<------- *** enter your tweet ***

if (message) {
  T.post("statuses/update", { status: message }, function (
    err,
    data,
    response
  ) {
    if (err) {
      console.log("caught error", err.stack);
    } else {
      console.log(data);
    }
  });
}
