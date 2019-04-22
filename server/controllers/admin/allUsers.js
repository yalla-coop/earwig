const boom = require("boom");

const { getAllUsers } = require("./../../database/queries/user");

module.exports = ((req, res, next) => {
  const awaitingReview = req.query.awaitingReview === "true";

  getAllUsers(awaitingReview)
    .then((users) => {
      res.json(users);
    }).catch(() => {
      next(boom.badImplementation());
    });
});