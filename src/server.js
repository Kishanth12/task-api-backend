import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./lib/mongodb.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log("Server Started on Port: " + port);
  connectDb();
});
