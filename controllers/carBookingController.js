const { v4: uuidv4 } = require('uuid');
const CarBooking= require("../models/CarBooking");
const Redis = require("ioredis");
const redisClient = new Redis(); 

const postCarBookingView = (req, res) => {
    res.render("carBooking", {
      user: req.user
    });
  };
  
  // Handle form submission

  const submitNewCarBooking =  async (req, res) => {
    console.log(req.body);
    const { pickupLocation,carType, pickupDateTime, returnDateTime } = req.body;
  
  
    const carBooking = new CarBooking({
        id: uuidv4(),
        pickupLocation: pickupLocation,
        carType: carType,
        pickupDateTime: pickupDateTime,
        returnDateTime: returnDateTime,
        bookedBy: req.user.name,
        bookedByEmail: req.user.email
      });
    
      try {
        
        await carBooking.save();
        console.log(carBooking);
        console.log("Car Booking details saved");
        res.redirect('/payment-gateway');
      } catch (error) {
        res.status(500).send(error);
      }
  };

  const submitCarBookingSuccess = (req, res) => {

    res.render("jobPostSuccess", {
        message: "Car is Booked successfully",
        user: req.user
    });
  };

  // const myPostingsView = async (req, res) => {
  //   try {
  //       const email = req.user.email;
  //       const hotelPostings =  await Car.find({ creatorEmail: email });
  //       res.render("viewMyPostings", {
  //           jobPostings: hotelPostings,
  //           user: req.user
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ message: 'Server error' });
  //     }
    
  // };

  

  
  module.exports = {
    postCarBookingView,
    submitNewCarBooking,
    submitCarBookingSuccess
  };
  