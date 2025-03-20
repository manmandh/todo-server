import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { MONGOOSE_URI, PORT } from "./utils";
import { userRoutes } from "./routes/user.route";
import { productRoutes } from "./routes";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

mongoose
  .connect(MONGOOSE_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(
        `SERVER IS RUNNING IN PORT: ${PORT} at ${new Date().toLocaleString()}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
