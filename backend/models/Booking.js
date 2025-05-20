const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true
  },
  name: String,
  phone: String,
  date: String,
  time: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
