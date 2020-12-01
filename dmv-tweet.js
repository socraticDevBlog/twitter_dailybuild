const csv = require("csvtojson");
const utils = require("./utils");
let tweeter = require("./tweet-module");

class Vanity {
  set Plate(Plate) {
    this._Plate = Plate;
  }
  get Plate() {
    return this._Plate;
  }
  set Customer_meaning(Customer_meaning) {
    this._Customer_meaning = Customer_meaning;
  }
  get Customer_meaning() {
    return this._Customer_meaning;
  }
  set Reviewer_comments(Reviewer_comments) {
    this._Reviewer_comments = Reviewer_comments;
  }
  get Reviewer_comments() {
    return this._Reviewer_comments;
  }

  constructor() {}
}

function msg(vanity) {
    return `🚦💵🚗 dmv says i cannot get muh vanity plate "${vanity.Plate}" 'cause they think it means "${vanity.Reviewer_comments}" but it really just means "${vanity.Customer_meaning}" to me 🤪`;
    }
    
let plates = [];

const converter = csv()
  .fromFile("./dmv-vanity-plates.csv")
  .then((json) => {
    let plate;
    json.forEach((row) => {
      plate = new Vanity();
      Object.assign(plate, row);
      plates.push(plate);
    });
  })
  .then(() => {
    let posted = new tweeter.TweetPoster(
      msg(plates[utils.randomizer(0, plates.length)])
    );
  });

//   data source : https://github.com/veltman/ca-license-plates/blob/master/applications.csv