import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./lib/mongodb.js";
import taskRouter from "./routes/taskRoute.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", taskRouter);


app.use(errorHandler)

app.listen(port, () => {
  console.log("Server Started on Port: " + port);
  connectDb();
});
