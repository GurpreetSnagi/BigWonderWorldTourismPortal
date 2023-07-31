const express = require("express");

const {
    postCarBookingView, submitNewCarBooking, submitCarBookingSuccess
} = require("../controllers/carBookingController");

const {
    myPostingsView
  } = require("../controllers/jobPostController");

const { protectRoute } = require("../auth/protect");

const router = express.Router();

//Dashboard
router.get("/book-car",protectRoute, postCarBookingView);
router.post("/book-car", protectRoute, submitNewCarBooking);
router.get("/book-car-success", protectRoute, submitCarBookingSuccess);
//router.post("/login", loginUser);

router.get("/view-my-postings", protectRoute, myPostingsView);


module.exports = router;