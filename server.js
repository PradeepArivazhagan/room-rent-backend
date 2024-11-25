import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/", router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connect to MongoDB and Server is Listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  });
