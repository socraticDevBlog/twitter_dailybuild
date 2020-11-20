const Twit = require('twit');
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

// stolen from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php (2020-11-19)
var today=new Date();
var xmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
    xmas.setFullYear(xmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
var daysToXmas = Math.ceil((xmas.getTime()-today.getTime())/(one_day));


const message = `👋 Hey there dailyfolks!.
This is an automated message 🤖 to remind you that there's ${daysToXmas} days left to Christmas ♥️`;

(async function main() {
  try {
    await T.post('statuses/update', { status: message });
    console.log('Successfully posted the tweet!');
  } catch (e) {
    console.log('Failed to post the tweet!');
    console.log(e.message);
  }
})();
