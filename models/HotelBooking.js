const mongoose = require("mongoose");

// Define a schema for job postings
const hotelbookingSchema = new mongoose.Schema({

    id: { type: String, required: true, unique: true },
    hotelId: { type: String, required: true },
    hoteltitle: { type: String, required: true },
    hotelcity: { type: String, required: true },
    hoteldescription: { type: String, required: true },
    hotelcountry: { type: String, required: true },
    hoteltype: { type: String, required: true },
    hotelprice: { type: String, required: false },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    bookedBy: { type: String, required: true },
    bookedByEmail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

const HotelBooking = mongoose.model('HotelBooking', hotelbookingSchema);
module.exports = HotelBooking;
