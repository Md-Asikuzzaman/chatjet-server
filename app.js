import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 8080;

// middleware...
app.use(bodyParser.json({ extended: true, limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

app.use(router);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Chatjet Api</h1>");
});

mongoose.connect(process.env.LOCALDB_URI, () => {
  app.listen(PORT, () => {
    console.log("Server is running...");
  });
});
