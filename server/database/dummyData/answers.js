const Question = require("../models/Question");
const Organization = require("../models/Organization");
const User = require("../models/User");
const Comment = require("../models/Comment");
const Review = require("../models/Review");
const Answer = require("../models/Answer");

module.exports = async () => {
  const agencyQuestions = await Question.find({ category: "agency" }).sort({ number: 1 });
  const payrollQuestions = await Question.find({ category: "payroll" }).sort({ number: 1 });
  const worksiteQuestions = await Question.find({ category: "worksite" }).sort({ number: 1 });
  const companyQuestions = await Question.find({ category: "company" }).sort({ number: 1 });

  // const agency = await Organization.find({ name: "Aspire Recruitment" });

  const companies = await Organization.find({ category: "company" });
  const agencies = await Organization.find({ category: "agency" });
  const worksites = await Organization.find({ category: "worksite" });
  const payrolls = await Organization.find({ category: "payroll" });

  const users = await User.find({ verified: true, isAdmin: false });

  const comments = await Comment.find();

  const agencyReview1 = await Review.find({ user: users[0], organization: agencies[0] });
  const agencyReview2 = await Review.find({ user: users[1], organization: agencies[0] });
  const payrollReview1 = await Review.find({ user: users[0], organization: payrolls[0] });
  const payrollReview2 = await Review.find({ user: users[1], organization: payrolls[0] });
  const worksiteReview1 = await Review.find({ user: users[0], organization: worksites[0] });
  const worksiteReview2 = await Review.find({ user: users[1], organization: worksites[0] });
  const companyReview1 = await Review.find({ user: users[0], organization: companies[0] });
  const companyReview2 = await Review.find({ user: users[1], organization: companies[0] });

  const reviews = [
    agencyReview1[0],
    agencyReview2[0],
    payrollReview1[0],
    payrollReview2[0],
    worksiteReview1[0],
    worksiteReview2[0],
    companyReview1[0],
    companyReview2[0],
  ];

  const answers = [
    {
      question: agencyQuestions[0],
      answer: "no",
      comment: comments[0],
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[2],
      answer: "Fully accurate",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[3],
      answer: "yes",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[4],
      answer: "no",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[5],
      answer: "no",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[6],
      answer: "no",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[7],
      answer: "John Doe",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[8],
      answer: 20,
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[9],
      answer: "yes",
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[17],
      answer: 10,
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },
    {
      question: agencyQuestions[18],
      answer: "yes",
      comment: comments[2],
      user: users[0],
      review: reviews[0],
      organization: reviews[0].organization,
    },

    /* ================ agency 2 ========================= */
    {
      question: agencyQuestions[0],
      answer: "no",
      comment: comments[0],
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[1],
      answer: "yes",
      comment: comments[0],
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[2],
      answer: "Fully accurate",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[3],
      answer: "yes",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[4],
      answer: "no",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[5],
      answer: "no",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[6],
      answer: "no",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[7],
      answer: "John Doe",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[8],
      answer: 20,
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[9],
      answer: "yes",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[10],
      answer: "Champion Contractors",
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[17],
      answer: 10,
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    {
      question: agencyQuestions[18],
      answer: "yes",
      comment: comments[2],
      user: users[1],
      review: reviews[1],
      organization: reviews[1].organization,
    },
    /* ================ payroll 1 ========================= */
    {
      question: payrollQuestions[0],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[1],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[2],
      answer: "Mostly accurate",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[3],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[4],
      answer: "no",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[5],
      answer: "no",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[6],
      answer: "no",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[7],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[8],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[9],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[10],
      answer: 20,
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[11],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[12],
      answer: "Acrow Recruitment",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },
    {
      question: payrollQuestions[13],
      answer: "yes",
      user: users[0],
      review: reviews[2],
      organization: reviews[2].organization,
    },

    /* ================ payroll 2 ========================= */
    {
      question: payrollQuestions[0],
      answer: "yes",
      comment: comments[0],
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[1],
      answer: "no",
      comment: comments[0],
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[2],
      answer: "Fully accurate",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[3],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[4],
      answer: "yes",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[5],
      answer: "yes",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[6],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[7],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[8],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[9],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[12],
      answer: "Adecco",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },
    {
      question: payrollQuestions[13],
      answer: "no",
      user: users[1],
      review: reviews[3],
      organization: reviews[3].organization,
    },

    /* ================ worksite 1 ========================= */

    {
      question: worksiteQuestions[0],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[1],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[2],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[4],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[5],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[6],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[7],
      answer: "no",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[8],
      answer: "image/link",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[9],
      answer: "no",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[10],
      answer: "no",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[11],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[12],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[13],
      answer: "no",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[14],
      answer: "hot foot served",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[15],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },

    {
      question: worksiteQuestions[16],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[17],
      answer: "4Seasons",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },
    {
      question: worksiteQuestions[18],
      answer: "yes",
      user: users[0],
      review: reviews[4],
      organization: reviews[4].organization,
    },

    /* ================ worksite 2 ========================= */

    {
      question: worksiteQuestions[0],
      answer: "no",
      comment: comments[0],
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[1],
      answer: "yes",
      comment: comments[0],
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[2],
      answer: "yes",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[4],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[5],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[6],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[7],
      answer: "yes",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[8],
      answer: "image/link",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[9],
      answer: "yes",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[10],
      answer: "yes",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[11],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[12],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[13],
      answer: "yes",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[14],
      answer: ["hot foot served", "vending machines", "microwave"],
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[15],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },

    {
      question: worksiteQuestions[16],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[17],
      answer: "Blue Cafee",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },
    {
      question: worksiteQuestions[18],
      answer: "no",
      user: users[1],
      review: reviews[5],
      organization: reviews[5].organization,
    },

    /* ================ company 1 ========================= */

    {
      question: companyQuestions[0],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[1],
      answer: "yes",
      comment: comments[0],
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[2],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[3],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[4],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[5],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[6],
      answer: "John Rees",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[7],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    {
      question: companyQuestions[8],
      answer: "yes",
      user: users[0],
      review: reviews[6],
      organization: reviews[6].organization,
    },
    /* ================ company 2 ========================= */

    {
      question: companyQuestions[0],
      answer: "no",
      comment: comments[0],
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[1],
      answer: "no",
      comment: comments[0],
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[2],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[3],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[4],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[5],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[6],
      answer: "John Rees",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[7],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
    {
      question: companyQuestions[8],
      answer: "no",
      user: users[1],
      review: reviews[7],
      organization: reviews[7].organization,
    },
  ];

  return Answer.create(answers);
};
