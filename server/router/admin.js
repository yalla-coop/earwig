const router = require("express").Router();

const getAllUsers = require("./../controllers/admin/allUsers");
const deleteUser = require("./../controllers/admin/deleteUser");
const userInfo = require("./../controllers/admin/userInfo");
const verifyUser = require("./../controllers/admin/verifyUser");
const rejectUser = require("./../controllers/admin/rejectUser");

const { getAllTrades, deleteTradeController } = require("../controllers/admin/trades");

router.get(
  "/users",
  getAllUsers,
);

router.delete(
  "/users",
  deleteUser,
);

router.get(
  "/users/:id",
  userInfo,
);

router.patch(
  "/users/verify",
  verifyUser,
);

router.patch(
  "/users/reject",
  rejectUser,
);

router.get("/trades", getAllTrades);
router.delete("/trades/:id", deleteTradeController);

module.exports = router;