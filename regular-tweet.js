// populate the message you want to tweet, then submit a pull-request
// ** if there is already a message in there: replace it with yours
//
const message = "✨✨ major head pats to member 'luxemboye' who crafted a based dailyscript✨✨"; //<------- *** enter your tweet ***
//
// that's it ! dont worry about the code down under.

let tweeter = require('./tweet-module');
let posted = new tweeter.TweetPoster(message);
