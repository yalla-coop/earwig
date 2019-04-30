const User = require("../../models/User");

module.exports = (awaitingReview) => {
  const match = {
    isAdmin: false,
  };
  if (awaitingReview === true) {
    match.awaitingReview = true;
  }

  return User.aggregate([
    {
      $match: match,
    }, {
      $project: {
        status: {
          $cond: {
            if: { $eq: [true, "$verified"] },
            then: "verified",
            else: {
              $cond: {
                if: { $eq: [true, "$awaitingReview"] },
                then: "awaiting review",
                else: "unverified",
              },
            },
          },
        },
        email: 1,
        userId: 1,
        city: 1,
        key: "$_id",
      },
    },
  ]);
};
