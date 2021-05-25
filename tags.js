/*
    This file takes all the tags from the articles.json file and dumps them to tags.json to be used in the application for article filtering based on tag.
*/

const fs = require("fs");

fs.readFile("articles.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let articlesFile = JSON.parse(data);
  let tags = [];

  for (let article of articlesFile.articles) {
    for (let tag of article.tags) {
      if (tags.indexOf(tag) === -1) {
        tags.push(tag);
      }
    }
  }

  console.log(tags);

  fs.writeFile("tags.json", JSON.stringify(tags), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
});
