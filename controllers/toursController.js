const { v4: uuidv4 } = require('uuid');
const Tours = require("../models/Tours");
const TourBooking = require("../models/TourBooking");

const postTourView = (req, res) => {

    res.render("postTour", {
      user: req.user
    });
  };
  
  // Handle form submission

  const submitNewTour =  async (req, res) => {
    const { title, city, description, country, type, price } = req.body;
      const tour = new Tours({
        id: uuidv4(),
        title: title,
        city: city,
        description: description,
        country: country,
        type: type,
        price: price,
        creatorName: req.user.name,
        creatorEmail: req.user.email
      });
    
      try {
        await tour.save();
        console.log("Tour saved");
        res.redirect('/create-hotel-success');
      } catch (error) {
        res.status(500).send(error);
      }
  };

  const submitHotelSuccess = (req, res) => {

    res.render("jobPostSuccess", {
        message: "Hotel is posted successfully",
        user: req.user
    });
  };

  const myPostingsView = async (req, res) => {
    try {
        const email = req.user.email;
        const hotelPostings =  await Tours.find({ creatorEmail: email });
        res.render("viewMyPostings", {
            jobPostings: hotelPostings,
            user: req.user
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
  };
 

  const viewToursById = async (req, res) => {
    try {
        const tour =  await Tours.findOne({ id: req.query.id });
        //console.log(job_)
        res.render("viewTour", {
            tour: tour,
            user: req.user
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
  };

  const submitNewTourBooking =  async (req, res) => {
    console.log(req.body);
    const { departure,tourId} = req.body;
  
    const tour =  await Tours.findOne({ tourId });
    const tourBooking = new TourBooking({
        id: uuidv4(),
        tourId: tourId,
        tourtitle: tour.title,
        tourcity: tour.city,
        tourcountry: tour.country,
        tourdescription: tour.description,
        tourprice: tour.price,
        tourtype: tour.type,
        departure: departure,
        bookedBy: req.user.name,
        bookedByEmail: req.user.email
      });
    
      try {
        
        await tourBooking.save();
        console.log(tourBooking);
        console.log("Tour Booking details saved");
        res.redirect('/payment-gateway');
      } catch (error) {
        res.status(500).send(error);
      }
  };

  
 const viewAllTours = async (req, res) => {
    try {
        const tours =  await Tours.find();
        res.render("viewTours", {
            Tours: tours,
            user: req.user
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
  };
  
  module.exports = {
    postTourView,
    submitNewTour,
    submitHotelSuccess,
    submitNewTourBooking,
    viewToursById,
    myPostingsView,
    viewAllTours
  };
  