const express = require("express");

const {
  registerView,
  loginView,
  registerUser,
  loginUser,
  logoutView
} = require("../controllers/loginController");
const { dashboardView, myBookingsView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();

router.get("/register", registerView);
router.get("/login", loginView);
router.get("/logout", logoutView);
//Dashboard
router.get("/dashboard", protectRoute, dashboardView);
router.get("/view-bookings", protectRoute, myBookingsView);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
