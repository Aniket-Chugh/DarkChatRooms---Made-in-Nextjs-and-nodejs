import express from "express"
import authRouter from "./src/routes/auth.route.js";
const app = express();

app.use("/api/auth", authRouter)

app.listen(5000, () => {
    console.log("server is running with no error");
})
