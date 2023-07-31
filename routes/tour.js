const express = require("express");
const multer = require('multer');

const {
    postTourView,
    submitNewTour,
    submitHotelSuccess,
    submitNewTourBooking,
    viewToursById,
    myPostingsView,
    viewAllTours
} = require("../controllers/toursController");

const { protectRoute } = require("../auth/protect");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Math.round(Math.random() * 1E9);
      //cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
      cb(null, file.originalname.split('.')[0] + '-' + uniqueSuffix + '.' +file.originalname.split('.')[1]);
    }
  });
  
const upload = multer({ storage: storage });
const router = express.Router();

//Dashboard
router.get("/view-tours", protectRoute, viewAllTours);
router.get("/book-tour", protectRoute, viewToursById);
router.post("/book-tour", protectRoute, submitNewTourBooking);
router.get("/create-tour", protectRoute, postTourView);
router.post("/create-tour", protectRoute, submitNewTour);
router.get("/create-hotel-success", protectRoute, submitHotelSuccess);
//router.post("/login", loginUser);

router.get("/view-my-postings", protectRoute, myPostingsView);


module.exports = router