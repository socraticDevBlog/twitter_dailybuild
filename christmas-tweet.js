let tweeter = require("./tweet-module");

// stolen from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php (2020-11-19)
let xmasAdvent = new Date(today.getFullYear(), 11, 25);
let xmas = new Date(2020, 12, 25);
let today = new Date();

// we dont want to think about xmas anymore past december 25th
if (today > xmas) {
  return;
}

if (today.getMonth() == 11 && today.getDate() > 25) {
  xmasAdvent.setFullYear(xmasAdvent.getFullYear() + 1);
}

let one_day = 1000 * 60 * 60 * 24;
let daysToXmas = Math.ceil((xmasAdvent.getTime() - today.getTime()) / one_day);

const message = `👋 Hey there dailyfolks!.
This is an automated message 🤖 to remind you that there are ${daysToXmas} days left before Christmas 🌟🧑‍🎄`;

let posted = new tweeter.TweetPoster(message);
