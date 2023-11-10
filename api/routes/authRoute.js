import express from  "express";
import { signin, signup, google, signOut } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.post("/signout", signOut);

export default router;