export const HandleUSSDCall = async (req, res) => {
    try {
        const { sessionId, serviceCode, phoneNumber, text } = req.body;
    
        // Process the USSD request here
        let response = "Welcome to our USSD service. Please enter your choice.";
    
        // Example logic based on user input
        if (text === "") {
        response = "1. Register";
        } else if (text === "1") {
        response = "Lecome to the registration process. Please enter your name.";
        } else if (text === "2") {
        response = "already a member how great! Please enter your account number.";
        } else if (text === "3") {
        response = "Thank you for using our service. Goodbye!";
        } else {
        response = "Invalid option. Please try again.";
        }
    
        res.set("Content-Type", "text/plain");
        res.send(response);
    } catch (error) {
        console.error("Error handling USSD call:", error);
        res.status(500).send("An error occurred while processing your request.");
    }
}
