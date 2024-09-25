import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Route to post an application
router.post("/post", isAuthenticated, postApplication);

// Route for employers to get all applications
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);

// Route for job seekers to get all their applications
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);

// Route for job seekers to delete an application by ID
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;
