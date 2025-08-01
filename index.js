import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { run } from "./src/config/db.js";
import { ussdRoutes } from "./src/routes/ussd.routes.js";

dotenv.config();
const app = express();
run()
app.use(cors());
app.use(express.json());
app.use("/api", ussdRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});