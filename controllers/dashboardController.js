//For Register Page
const Redis = require("ioredis");
const redisClient = new Redis();
const HotelBookings = require("../models/HotelBooking");
const CarBookings = require("../models/CarBooking");
const TourBookings = require("../models/TourBooking");

const dashboardView = async (req, res) => { 
  try {
    if (req.isAuthenticated()) {
      const { email } = req.user;

      const userKey = `user:${email}`;
      const userData = JSON.stringify(req.user);

      await redisClient.setex(userKey, 3600, userData); 
      const userDataFromRedis = await getUserDataFromRedis(email);

      res.render("dashboard", {
        user: userDataFromRedis
      });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.error("Error in dashboardView:", err);
    res.render("dashboard", {
      user: req.user
    });
  }
};

// Function to fetch user data from Redis using the user's email
const getUserDataFromRedis = async (email) => {
  try {
    const userKey = `user:${email}`;
    const userData = await redisClient.get(userKey);
    console.log("In getting data from Redis:", userData);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error fetching user data from Redis:", error);
    return null;
  }
};



const myBookingsView = async (req, res) => {
  try {
      const email = req.user.email;
      const hotelBookings =  await HotelBookings.find({ bookedByEmail: email });
      const carBookings =  await CarBookings.find({ bookedByEmail: email });
      const tourBookings =  await TourBookings.find({ bookedByEmail: email });
      //console.log(jobPostings)
      console.log(hotelBookings)
      console.log(carBookings)
      res.render("viewBookings", {
        hotelBookings: hotelBookings,
        carBookings: carBookings,
        tourBookings: tourBookings,
          user: req.user
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  
};
module.exports = {
  dashboardView,myBookingsView
};
