const boom = require("boom");
const moment = require("moment");
const { findReviewById } = require("./../database/queries/review");

/**
 * Check if the user can edit his own review under these condidtion
 * 1. it's within 30 days of giving the review;
 * 2. the entity has not responded; and
 * 3. the review has not been marked as helpful by any other workers.
 */
module.exports = async (req, res, next) => {
  const { reviewId } = req.body;

  try {
    const review = await findReviewById(reviewId);
    const before1Month = moment().subtract(30, "days");
    const createdLTMonthAgo = moment(review.createdAt).isSameOrAfter(before1Month);
    const hasVotes = !!review.overallReview.replies.length;

    const hasVoiceVotes = !!review.voiceReview.replies.length;

    if (
      !hasVotes
      && !hasVoiceVotes
      && createdLTMonthAgo
      && review.user.toString() === req.user._id.toString()
    ) {
      return res.send({ orgId: review.organization });
    }
    return next(boom.unauthorized());
  } catch (error) {
    return next(boom.badImplementation());
  }
};
