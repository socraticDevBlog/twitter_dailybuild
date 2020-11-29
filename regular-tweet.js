let tweeter = require("./tweet-module");

const COMMAND_LINE_ARGS_1_IDX = 2;

// populate the message you want to tweet, then submit a pull-request
// ** if there is already a message in there: replace it with yours
//
var message = ""; //<------- *** enter your tweet ***
//
// that's it ! dont worry about the code down under.

// if msg passed as command-line argument, overwrite original message
if (process.argv.length > 2) {
  message = process.argv[COMMAND_LINE_ARGS_1_IDX];
}

let posted = new tweeter.TweetPoster(message);
