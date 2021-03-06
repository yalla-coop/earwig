// gets all organizations, includes number of reviews and average ratings for each entry
const Organization = require("../models/Organization");

module.exports = category =>
  Organization.aggregate([
    {
      $match: {
        active: true,
        category,
      },
    },
    {
      $lookup: {
        from: "reviews",
        let: { org_id: "$_id" },
        pipeline: [
          {
            $match: { $expr: { $eq: ["$organization", "$$org_id"] } },
          },
          {
            $lookup: {
              from: "users",
              localField: "user",
              foreignField: "_id",
              as: "userObject",
            },
          },
          // COMMENTED_VERIFICATION_CHECK,
          // {
          //   $match: {
          //     "userObject.verified": true,
          //   },
          // },
        ],
        as: "reviews",
      },
    },
    {
      $addFields: {
        totalReviews: {
          $size: "$reviews",
        },
        avgRatings: {
          $avg: "$reviews.rate",
        },
      },
    },

    {
      $facet: {
        searchData: [
          // {
          //   $match: { _id: { $ne: null } },
          // },
          {
            $project: {
              _id: 1,
              name: 1,
              lastViewed: 1,
              category: 1,
              totalReviews: 1,
              avgRatings: 1,
            },
          },
        ],
        lastReviewed: [
          {
            $unwind: "$reviews",
          },
          {
            $project: {
              _id: 1,
              name: 1,
              lastViewed: 1,
              category: 1,
              totalReviews: 1,
              avgRatings: 1,
              lastReviewed: "$reviews.createdAt",
            },
          },
          {
            $sort: { lastReviewed: -1 },
          },
          {
            $group: { _id: "$_id", lastReviewed: { $first: "$$CURRENT" } },
          },
          {
            $sort: { "lastReviewed.lastReviewed": -1 },
          },
        ],
      },
    },
  ]);
