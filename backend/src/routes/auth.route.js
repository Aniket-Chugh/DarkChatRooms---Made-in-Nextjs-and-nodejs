import express from "express"
import { signup } from "../controllers/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.get("/signup", (req, res) => {
    res.send("login endpoint")
})
authRouter.get("/login", (req, res) => {
    res.send("login endpoint")
})

authRouter.get("/logout", (req, res) => {
    res.send("logout endpoint")
})

export default authRouter;
