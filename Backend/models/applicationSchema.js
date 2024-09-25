import mongoose from "mongoose";
import validator from "validator";

// Define the application schema
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid Email!",
    },
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  phone: {
    type: String, // Changed to String to accommodate international formats
    required: [true, "Please enter your Phone Number!"],
  },
  address: {
    type: String,
    required: [true, "Please enter your Address!"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Employer"],
      required: true,
    },
  },
}, { timestamps: true }); // Optional: add timestamps for createdAt and updatedAt

// Export the Application model
export const Application = mongoose.model("Application", applicationSchema);
