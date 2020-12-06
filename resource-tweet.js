const csv = require("csvtojson");
const utils = require("./utils");
let tweeter = require("./tweet-module");

class Resource {
  set Title(Title) {
    this._Title = Title;
  }
  get Title() {
    return this._Title;
  }
  set Description(Description) {
    this._Description = Description;
  }
  get Description() {
    return this._Description;
  }
  set Link(Link) {
    this._Link = Link;
  }
  get Link() {
    return this._Link;
  }

  constructor() {}
}

const descMaxLenght = 180;

function msg(resource) {
  return `"${resource.Title}" is a ${resource.Description.substring(
    0,
    descMaxLenght
  )} #development ${resource.Link} 🛠️automated daily resource suggestion🛠️`;
}

let resources = [];

const converter = csv()
  .fromFile("./dailyresource.csv")
  .then((json) => {
    let resource;
    json.forEach((row) => {
      resource = new Resource();
      Object.assign(resource, row);
      resources.push(resource);
    });
  })
  .then(() => {
    let posted = new tweeter.TweetPoster(
      msg(resources[utils.randomizer(0, resources.length)])
    );
  });
