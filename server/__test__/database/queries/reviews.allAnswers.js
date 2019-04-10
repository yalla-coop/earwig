const mongoose = require("mongoose");
const buildDB = require("../../../database/dummyData/index");
const { allAnswers } = require("../../../database/queries/reviews");

// const Organization = require("../../../database/models/Organization");
const Review = require("../../../database/models/Review");

describe("Test overallReview query", () => {
  beforeAll(async () => {
    await buildDB();
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test("Test with correct organization ID", async (done) => {
    const review = await Review.findOne();
    const organizationID = review.organization;

    allAnswers(organizationID).then((result) => {
      expect(result).toBeDefined();
      expect(result).toBe("hello");
      done();
    });
  });
});
