const mongoose = require("mongoose");
const Organization = require("./../../models/Organization");
const Answer = require("./../../models/Answer");
const Review = require("./../../models/Review");
const Comment = require("./../../models/Comment");
const Question = require("./../../models/Question");

const getAllReviews = require("./allReviews");
const getOverallReplies = require("./getOverallReplies");
const getReviewDetails = require("./getReviewDetails");
const updateHelpfulPoints = require("./updateHelpfulPoints");

module.exports.updateHelpfulPoints = updateHelpfulPoints;
module.exports.getOverallReplies = getOverallReplies;
module.exports.getAllReviews = getAllReviews;
module.exports.getReviewDetails = getReviewDetails;

module.exports.checkOrgExists = organizationID => Organization.findById(organizationID);

module.exports.deleteReview = id => Review.deleteOne({ _id: id });

module.exports.findById = id => Review.findById(id);

module.exports.addCommentOnOverallReview = (id, data, target) => Review.findByIdAndUpdate(id, {
  $push: {
    [`${target}.replies`]: data,
  },
});

// used in admin panel to change isVerified status of review
module.exports.approveRejectReview = (id, bool) => Review.findOneAndUpdate(
  { _id: id }, { isVerified: bool }, { new: true },
);

// used in admin panel to delete an answer of a review
module.exports.deleteAnswer = id => Answer.deleteOne({ _id: id });

module.exports.deleteReviewAnswers = id => Answer.deleteMany({ review: id });

module.exports.overallReview = organizationID => new Promise((resolve, reject) => {
  Organization.aggregate([
    // get the specific organization
    {
      $match: { _id: mongoose.Types.ObjectId(organizationID) },
    },
    // get all the reviews that organization has

    {
      $lookup: {
        from: "reviews",
        let: { organization: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ["$organization", "$$organization"] }],
              },
            },
          },
          {
            $lookup: {
              from: "users",
              let: { user: "$user" },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [{ $eq: ["$_id", "$$user"] }],
                    },
                  },
                },
              ],
              as: "user",
            },
          },
          // COMMENTED_VERIFICATION_CHECK
          // {
          //   $match: {
          //     "user.verified": true,
          //   },
          // },
          {
            $addFields: {
              user: { $arrayElemAt: ["$user", 0] },
            },
          },
        ],
        as: "reviews",
      },
    },
    {
      $addFields: {
        // work out the organization's average rating
        avgRatings: {
          $reduce: {
            input: "$reviews",
            initialValue: { avg: 0, count: 0, size: 0 },
            in: {
              count: { $add: ["$$value.count", "$$this.rate"] },
              // COMMENTED_VERIFICATION_CHECK
              // count: {
              //   $cond: {
              //     if: { $eq: ["$$this.user.verified", true] },
              //     then: { $add: ["$$value.count", "$$this.rate"] },
              //     else: "$$value.count",
              //   },
              // },
              size: { $add: [1, "$$value.size"] },
              // COMMENTED_VERIFICATION_CHECK
              // size: {
              //   $cond: {
              //     if: { $eq: ["$$this.user.verified", true] },
              //     then: { $add: [1, "$$value.size"] },
              //     else: "$$value.size",
              //   },
              // },
            },
          },
        },
      },
    },
    {
      $addFields: {
        // store the total number of reviews
        totalReviews: "$avgRatings.size",
        avgRatings: {
          $cond: {
            if: { $gt: ["$avgRatings.size", 0] },
            then: { $divide: ["$avgRatings.count", "$avgRatings.size"] },
            else: 0,
          },
        },
      },
    },
    {
      $unwind: { path: "$reviews", preserveNullAndEmptyArrays: true },
    },
    {
      $lookup: {
        from: "users",
        localField: "reviews.overallReview.replies.user",
        foreignField: "_id",
        as: "reviews.overallReview.allRepliesUsers",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "reviews.voiceReview.replies.user",
        foreignField: "_id",
        as: "reviews.voiceReview.allRepliesUsers",
      },
    },

    // {
    //   $project: {
    //     reviews: { $ifNull: ["$reviews", { user: "unspecified" }] },
    //     name: 1,
    //     category: 1,
    //     phoneNumber: 1,
    //     email: 1,
    //     websiteUrl: 1,
    //     location: 1,
    //     contractor: 1,
    //     lastViewed: 1,
    //   },
    // },
    {
      $unwind: { path: "$reviews.user", preserveNullAndEmptyArrays: true },
    },
    {
      $lookup: {
        from: "trades",
        localField: "reviews.user.trade",
        foreignField: "_id",
        as: "reviews.user.trade",
      },
    },
    {
      $project: {
        "reviews.user.email": 0,
        "reviews.user.isAdmin": 0,
        "reviews.user.password": 0,
        "reviews.user.createdAt": 0,
        "reviews.user.updatedAt": 0,
        "reviews.overallReview.allRepliesUsers.password": 0,
        "reviews.voiceReview.allRepliesUsers.password": 0,
      },
    },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        category: { $first: "$category" },
        phoneNumber: { $first: "$phoneNumber" },
        email: { $first: "$email" },
        websiteUrl: { $first: "$websiteURL" },
        location: { $first: "$location" },
        contractor: { $first: "$contractor" },
        lastViewed: { $first: "$lastViewed" },
        reviews: { $push: "$reviews" },
        totalReviews: { $first: "$totalReviews" },
        avgRatings: { $first: "$avgRatings" },
      },
    },
    {
      $project: {
        lastViewed: 0,
      },
    },
  ])
    .then(result => resolve(result))
    .catch(err => reject(err));
});

module.exports.basicReview = organizationID => Organization.aggregate([
  // get the specific organization
  {
    $match: { _id: mongoose.Types.ObjectId(organizationID) },
  },
  // get all the reviews that organization has
  {
    $lookup: {
      from: "reviews",
      let: { organization: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [{ $eq: ["$organization", "$$organization"] }],
            },
          },
        },
        {
          $lookup: {
            from: "users",
            let: { user: "$user" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$_id", "$$user"] }],
                  },
                },
              },
            ],
            as: "user",
          },
        },
        // COMMENTED_VERIFICATION_CHECK
        // {
        //   $match: {
        //     "user.verified": true,
        //   },
        // },
        {
          $addFields: {
            user: { $arrayElemAt: ["$user", 0] },
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $limit: 3,
        },
        {
          $lookup: {
            from: "users",
            localField: "voiceReview.replies.user",
            foreignField: "_id",
            as: "voiceReview.allRepliesUsers",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "overallReview.replies.user",
            foreignField: "_id",
            as: "overallReview.allRepliesUsers",
          },
        },
      ],
      as: "reviews",
    },
  },

  {
    $addFields: {
      // store the total number of reviews
      totalReviews: {
        $size: "$reviews",
      },
      // work out the organization's average rating
      avgRatings: {
        $avg: "$reviews.rate",
      },
    },
  },
  {
    $project: {
      lastViewed: 0,
      websiteURL: 0,
      phoneNumber: 0,
      email: 0,
      "reviews.overallReview.allRepliesUsers.password": 0,
      "reviews.voiceReview.allRepliesUsers.password": 0,
    },
  },
]);

module.exports.allAnswers = organizationID => new Promise((resolve, reject) => {
  Answer.aggregate([
    // get all answers related to that organization
    {
      $match: { organization: mongoose.Types.ObjectId(organizationID) },
    },
    {
      $lookup: {
        from: "users",
        let: { user: "$user" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$_id", "$$user"] },
                  // COMMENTED_VERIFICATION_CHECK
                  // { $eq: ["$verified", true] },
                ],
              },
            },
          },
        ],
        as: "user",
      },
    },
    {
      $match: { user: { $not: { $size: 0 } } },
    },
    // group the answers by the question
    // each question now has an array of the answers
    {
      $group: {
        _id: "$question",
        answers: { $push: "$$ROOT" },
      },
    },
    // add the question info to each question (e.g. type of question)
    {
      $lookup: {
        from: "questions",
        localField: "_id",
        foreignField: "_id",
        as: "question",
      },
    },
    {
      $unwind: "$question",
    },
    {
      $sort: {
        "question.profileOrder": 1,
      },
    },
    // group by profile sections
    {
      $group: {
        _id: "$question.profileSection",
        questions: { $push: "$$ROOT" },
      },
    },
    // {
    //   $sort: {
    //     "_id": 1,
    //   },
    // },
  ])
    .then(resolve)
    .catch(err => reject(err));
});

module.exports.allQsAndAs = (orgType, orgId, justContractor) => new Promise((resolve, reject) => {
  let match = {
    $match: { category: orgType },
  };

  if (orgType === "worksite" && justContractor) {
    match = {
      $match: {
        category: orgType,
        text: "Who was the main company on site?",
      },
    };
  }

  Question.aggregate([
    // get all the questions for that organization type
    match,
    {
      $lookup: {
        from: "answers",
        let: { question: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ["$question", "$$question"] }],
              },
            },
          },
          {
            $lookup: {
              from: "users",
              let: { user: "$user" },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ["$_id", "$$user"] },
                        // COMMENTED_VERIFICATION_CHECK
                        // { $eq: ["$verified", true] },
                      ],
                    },
                  },
                },
              ],
              as: "user",
            },
          },
          { $match: { user: { $not: { $size: 0 } } } },
        ],
        as: "answers",
      },
    }, {
      $lookup: {
        from: "comments",
        let: { question: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$question", "$$question"] },
                  { $eq: ["$organization", mongoose.Types.ObjectId(orgId)] },
                ],
              },
            },
          },
        ],
        as: "comments",
      },
    },
    {
      $project: {
        _id: 1,
        category: 1,
        type: 1,
        profileSection: 1,
        profileText: 1,
        profileType: 1,
        profileOrder: 1,
        group: 1,
        hasComment: 1,
        icon: 1,
        text: 1,
        hintText: 1,
        options: 1,
        answers: {
          $filter: {
            input: "$answers",
            as: "answer",
            cond: {
              $eq: ["$$answer.organization", mongoose.Types.ObjectId(orgId)],
            },
          },
        },
        commentsCount: { $size: "$comments" },
      },
    },
    {
      $sort: {
        profileOrder: 1,
      },
    },
    // group by profile sections
    {
      $group: {
        _id: "$profileSection",
        questions: { $push: "$$ROOT" },
      },
    },
  ])
    .then(resolve)
    .catch(err => reject(err));
});

module.exports.getFirstLevelCommentsOnQuestion = (organizationID, questionID) => new Promise(
  (resolve, reject) => {
    Comment.aggregate([
      {
        $match: {
          $and: [
            {
              organization: mongoose.Types.ObjectId(organizationID),
            },
            {
              question: mongoose.Types.ObjectId(questionID),
            }, {
              parentComment: { $exists: false },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "trades",
          localField: "user.trade",
          foreignField: "_id",
          as: "trade",
        },
      },
      {
        $unwind: { path: "$trade", preserveNullAndEmptyArrays: true },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "parentComment",
          as: "subComments",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "subComments.user",
          foreignField: "_id",
          as: "repliedUsers",
        },
      },
      {
        $project: {
          userId: "$user._id",
          userUserId: "$user.userId",
          organization: 1,
          text: 1,
          displayName: 1,
          trade: "$trade.title",
          points: "$user.points",
          helpedUsers: "$user.helpedUsers",
          repliesCount: { $size: "$subComments" },
          createdAt: 1,
          review: 1,
          repliedUsers: 1,
        },
      },
    ])
      .then((result) => {
        resolve(result);
      })
      .catch(err => reject(err));
  },
);


module.exports.getCommentOnQuestionWithReplies = commentId => new Promise(
  (resolve, reject) => {
    Comment.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(commentId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "trades",
          localField: "user.trade",
          foreignField: "_id",
          as: "trade",
        },
      },
      {
        $unwind: { path: "$trade", preserveNullAndEmptyArrays: true },
      },
      // -=--------------------------
      {
        $lookup: {
          from: "comments",
          let: { parentComment: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ["$parentComment", "$$parentComment"] }],
                },
              },
            }, {
              $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "user",
              },
            },
            {
              $unwind: "$user",
            },
            {
              $lookup: {
                from: "trades",
                localField: "user.trade",
                foreignField: "_id",
                as: "trade",
              },
            },
            {
              $unwind: { path: "$trade", preserveNullAndEmptyArrays: true },
            },
          ],
          as: "subComments",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "subComments.user",
          foreignField: "_id",
          as: "repliedUsers",
        },
      },
      {
        $project: {
          userId: "$user._id",
          userUserId: "$user.userId",
          organization: 1,
          text: 1,
          displayName: 1,
          trade: "$trade.title",
          points: "$user.points",
          helpedUsers: "$user.helpedUsers",
          repliesCount: { $size: "$subComments" },
          createdAt: 1,
          review: 1,
          repliedUsers: 1,
          subComments: 1,
        },
      },
    ])
      .then((result) => {
        resolve(result);
      })
      .catch(err => reject(err));
  },
);


// gets all reviews given by 1 user for 1 organisation and sets a flag depending
// returns true if review is less than 1 month old

module.exports.checkUsersLatestReview = (organization, user) => new Promise((resolve, reject) => {
  Review.aggregate([
    // get all reviews for 1 user
    {
      $match: {
        $and: [
          {
            organization: mongoose.Types.ObjectId(organization),
          },
          {
            user: mongoose.Types.ObjectId(user),
          },
        ],
      },
    },

    {
      $project: {
        _id: 0,
        date: "$createdAt",
        // get number of days between creation of review and today
        // first step mil seconds, second step days
        diff_days: {
          $divide: [
            {
              $subtract: [new Date(), "$createdAt"],
            },
            1000 * 60 * 60 * 24,
          ],
        },
        older_30_days: {
          $lte: [30, "$diff_days"],
        },
      },
    },
  ])
    .then(result => resolve(result))
    .catch(err => reject(err));
});

module.exports.getAllQs = () => Question.aggregate([
  {
    $project: {
      text: 1,
      category: 1,
    },
  },
]);

/**
 * A query to patch specific fields from Review object
 * @param {string} reviewId MongodDB ObjectId
 * @param {object} data Fields to be updated
 *
 * @return {query}
 */
module.exports.patchReviewField = (reviewId, data) => Review
  .findByIdAndUpdate(reviewId,
    { $set: data },
    { omitUndefined: true });

/**
 * A query to fetch single review populated with the `user` and
 * `organiztion` data
 *
 * @param {string} reviewId MongoDB ObjectId
 */

module.exports.getOneReviewWithOrgAndUser = reviewId => Review.findById(reviewId)
  .populate({ path: "user", select: "email" })
  .populate({ path: "organization", select: "category name" });

module.exports.getOrgsReviewedLast30D = userId => Review.find(
  {
    $and: [
      // created at within 30 Days
      { createdAt: { $gte: Date.now() - 1000 * 60 * 60 * 24 * 30 } },
      {
        user: mongoose.Types.ObjectId(userId),
      },
    ],
  },
  { _id: 0, organization: 1 },
);
