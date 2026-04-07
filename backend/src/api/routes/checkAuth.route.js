import express from "express";
import { createAccessToken } from "../../middlewares/CreateAuthToken.middleware.js";

const CheckAuthRouter = express.Router();


CheckAuthRouter.get("/auth/refresh", (req, res) => {
    res.send("this is auth refresh")
})

CheckAuthRouter.post("/auth/refresh", createAccessToken);
export default CheckAuthRouter;
