import express from "express";
import { HandleUSSDCall } from "../controllers/ussd.controller.js";
export const ussdRoutes = express.Router()
ussdRoutes.post("/ussd", (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    console.log(`Session ID: ${sessionId}, Service Code: ${serviceCode}, Phone Number: ${phoneNumber}, Text: ${text}`);
    
    // Call the controller function to handle the USSD request
    HandleUSSDCall(req, res);
});