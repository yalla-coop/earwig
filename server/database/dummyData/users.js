const User = require("../models/User");
const Trade = require("./../models/Trade");

module.exports = async () => {
  const trades = await Trade.find();

  const users = [
    // level 2 user just registered
    {
      email: "level2@earwig.com",
      password: "123456",
      trade: trades[0],
    },
    //  level 2 user - awaiting virification
    {
      email: "level2-awaiting@earwig.com",
      password: "123456",
      trade: trades[1],
      verificationPhoto: "users/fake_name.png", // to be replaced when the firebase storge is ready
      verified: false,
      awaitingReview: true,
    },
    // level 3 - verified
    {
      email: "level3@earwig.com",
      password: "123456",
      trade: trades[2],
      verified: true,
      awaitingReview: false,
    },
    // Admin
    {
      email: "admin@earwig.com",
      password: "123456",
      verified: true,
      awaitingReview: false,
    },
  ];

  return User.create(users);
};
