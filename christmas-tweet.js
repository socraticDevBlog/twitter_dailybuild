// stolen from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php (2020-11-19)
let today = new Date();
let xmas = new Date(today.getFullYear(), 11, 25);

// we dont want to think about xmas anymore past december 25th
if (today > xmas ) {
  return;
}

if (today.getMonth() == 11 && today.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}

let one_day = 1000 * 60 * 60 * 24;
let daysToXmas = Math.ceil((xmas.getTime() - today.getTime()) / one_day);

const message = `👋 Hey there dailyfolks!.
This is an automated message 🤖 to remind you that there are ${daysToXmas} days left before Christmas 🌟🧑‍🎄`;

let tweeter = require("./tweet-module");
let posted = new tweeter.TweetPoster(message);
