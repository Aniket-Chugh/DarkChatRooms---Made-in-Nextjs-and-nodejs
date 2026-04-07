import express from "express"
const RegisterRouter = express.Router();
import { register } from "../controllers/auth.controller.js";


RegisterRouter.post("/auth/register", register)


export default RegisterRouter;
