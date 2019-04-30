const router = require("express").Router();

const validation = require("./../middlewares/validation");
const getAllUsers = require("./../controllers/admin/allUsers");
const deleteUser = require("./../controllers/admin/deleteUser");
const userInfo = require("./../controllers/admin/userInfo");
const verifyUser = require("./../controllers/admin/verifyUser");
const rejectUser = require("./../controllers/admin/rejectUser");
const getReviews = require("./../controllers/admin/getReviews");
const deleteReview = require("./../controllers/admin/deleteReview");
const deleteReviewAnswer = require("./../controllers/admin/deleteReviewAnswer");

const updateReview = require("./../controllers/admin/handleSingleReviewStatus");
const getSingleReview = require("./../controllers/admin/getSingleReview");
const getOrganizations = require("./../controllers/admin/getOrganizations");
const activateOrganization = require("./../controllers/admin/activateOrganization");

const { getAllTrades, deleteTradeController } = require("../controllers/admin/trades");

router.get("/users", getAllUsers);

router.delete("/users", validation("onlyMongoId"), deleteUser);

router.get("/users/:id", userInfo);

router.patch("/users/verify", validation("onlyMongoId"), verifyUser);

router.patch("/users/reject", validation("onlyMongoId"), rejectUser);

router.get("/reviews", getReviews);

router.get("/single-review/:reviewID", getSingleReview);

router.delete("/reviews", validation("onlyMongoId"), deleteReview);

router.delete("/reviews/delete-answer/:id", deleteReviewAnswer);

router.patch("/reviews/update-status", updateReview);

router.get("/organizations/:category", getOrganizations);

router.patch("/organizations", validation("activateOrganization"), activateOrganization);

router.get("/trades", getAllTrades);

router.delete("/trades/:id", deleteTradeController);

module.exports = router;
