import express from "express"
import authRouter from "./src/routes/auth.route.js";
import messageRouter from "./src/routes/messages.route.js";
const app = express();


app.get("/", (req, res) => {
    res.send("everything going good mf")
})

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.listen(5000, () => {
    console.log("server is running with no error");
})
