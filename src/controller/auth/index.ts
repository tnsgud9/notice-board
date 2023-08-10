import express from "express";
import Login from "./login.controller";
import SignUp from "./signup.controller";
import Token from "./token.controller";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/token", Token);

export default router;
