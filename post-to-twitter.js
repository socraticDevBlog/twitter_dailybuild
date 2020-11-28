const message = process.argv[2];

let tweeter = require('./tweet-module');
let posted = new tweeter.TweetPoster(message);
