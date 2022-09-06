import express from "express";
import { signIn, signUp, fetchData } from "./../controllers/auth.js";
import { sendMessage, fetchMessage } from "./../controllers/message.js";
// import auth from "./../middleware/auth.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/users", fetchData);

router.post("/message", sendMessage);
router.get("/messages", fetchMessage);

export default router;
