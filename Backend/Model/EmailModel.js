const mongoose = require("mongoose");

// Define the schema for email form
const emailFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Create the model for email details
const EmailDetails = mongoose.model("EmailDetails", emailFormSchema);

module.exports = EmailDetails;
