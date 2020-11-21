// populate the message you want to tweet, they submit a pull-request
// ** if there is already a message in there: replace it with yours
//
const message = "all @dailybuild3's tweet comes from a push to main branch https://github.com/socraticDevBlog/twitter_dailybuild 💡"; //<------- *** enter your tweet ***
//
// that's it ! dont worry about the code down under.

let tweeter = require('./tweet-module');
let posted = new tweeter.TweetPoster(message);
