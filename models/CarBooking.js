const mongoose = require("mongoose");

// Define a schema for job postings
const carbookingSchema = new mongoose.Schema({

    id: { type: String, required: true, unique: true },
    pickupLocation: { type: String, required: true },
    carType: { type: String, required: true },
    pickupDateTime: { type: String, required: true },
    returnDateTime: { type: String, required: true },
    bookedBy: { type: String, required: true },
    bookedByEmail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

const CarBooking = mongoose.model('CarBooking', carbookingSchema);
module.exports = CarBooking;
