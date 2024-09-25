import express from "express";
import { register,login,logout,getUser} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";  // Ensure this is imported correctly

const router = express.Router();

// Route for user registration
router.post("/register", register);

// // Route for user login
router.post("/login", login);

// Route for logging out (requires authentication)
router.get("/logout", isAuthenticated, logout);

// Route to get the logged-in user details (requires authentication)
router.get("/getuser", isAuthenticated, getUser);

export default router;
