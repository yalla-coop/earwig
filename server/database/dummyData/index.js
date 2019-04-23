const mongoose = require("mongoose");

const dbConnection = require("./../dbConnection");
const resetDb = require("./resetDB");

const trades = require("./trades");
const questions = require("./questions");
const organizations = require("./organizations");
const answers = require("./answers");
const comments = require("./comments");
const jobs = require("./jobs");
const reviews = require("./reviews");
const users = require("./users");

const buildDummyData = () => new Promise((resolve, reject) => {
  dbConnection()
    .then(async () => {
      // delete all documents from models
      await resetDb();
      await trades();
      await organizations();
      await questions();
      await users();
      await reviews();
      await jobs();
      await comments();
      await answers();
    })
    .then(resolve)
    .catch(reject);
});

// check the NODE_ENV
// if it is "test" that mean we run the the build script in terminal
// invoke the build function
if (process.env.NODE_ENV !== "test") {
  buildDummyData().then(() => {
    // eslint-disable-next-line no-console
    console.log("Done!: DB has been built successfully");
    // close the connection after build
    mongoose.disconnect();
  });
}

module.exports = buildDummyData;
