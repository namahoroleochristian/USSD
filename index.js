import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { run } from "./src/config/db.js";

dotenv.config();
const app = express();
run()

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});