const csv = require("csvtojson");
const utils = require("./utils");
let tweeter = require("./tweet-module");

class Major {
  set Major(Major) {
    this._Major = Major;
  }
  get Major() {
    return this._Major;
  }
  set Major_category(Major_category) {
    this._Major_category = Major_category;
  }
  get Major_category() {
    return this._Major_category;
  }
  set Unemployment_rate(Unemployment_rate) {
    this._Unemployement_rate = Unemployment_rate;
  }
  get Unemployment_rate() {
    return this._Unemployement_rate;
  }
  set Median(Median) {
    this._Median = Median;
  }
  get Median() {
    return this._Median;
  }

  constructor() {}
}


function msg(maj) {
    return `picking a major in college is hard!😓 did you know, in 2014, recent graduates in ${
        maj.Major
    } earned an average of ${maj.Median}$ unless they where part of the ${(
        maj.Unemployment_rate * 100
        ).toFixed(2)} % who remained unemployed.`;
    }
    
let majors = [];

const converter = csv()
  .fromFile("./recent-grads-data.csv")
  .then((json) => {
    let m;
    json.forEach((row) => {
      m = new Major();
      Object.assign(m, row);
      majors.push(m);
    });
  })
  .then(() => {
    let posted = new tweeter.TweetPoster(
      msg(majors[utils.randomizer(0, majors.length)])
    );
  });

// source : https://fivethirtyeight.com/features/the-economic-guide-to-picking-a-college-major/
// dataset -> https://data.fivethirtyeight.com/