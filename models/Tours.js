const mongoose = require("mongoose");

// Define a schema for job postings
const tourSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: false },
    creatorName: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
