const mongoose = require("mongoose");

// Define a schema for job postings
const tourbookingSchema = new mongoose.Schema({

    id: { type: String, required: true, unique: true },
    tourId: { type: String, required: true },
    tourtitle: { type: String, required: true },
    tourcity: { type: String, required: true },
    tourdescription: { type: String, required: true },
    tourcountry: { type: String, required: true },
    tourtype: { type: String, required: true },
    tourprice: { type: String, required: false },
    departure: { type: String, required: true },
    bookedBy: { type: String, required: true },
    bookedByEmail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

const TourBooking = mongoose.model('TourBooking', tourbookingSchema);
module.exports = TourBooking;
