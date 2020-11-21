// populate the message you want to tweet, they submit a pull-request
// ** if there is already a message in there: replace it with yours
//
const message = "not tweeting makes danny a dull boi"; //<------- *** enter your tweet ***
//
// that's it ! dont worry about the code down under.

let tweeter = require('./tweet-module');
let posted = new tweeter.TweetPoster(message);
