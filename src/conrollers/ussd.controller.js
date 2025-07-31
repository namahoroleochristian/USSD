export const HandleUSSDCall = async (req, res) => {
    try {
        const { sessionId, serviceCode, phoneNumber, text } = req.body;
        const inputs = text.split("*");
        let response = "";

        if (text === "") {
            response = "CON Welcome to our USSD service.\n1. Register\n2. Login\n3. Exit";
        } else if (inputs[0] === "1") {
            if (inputs.length === 1) {
                response = "CON Enter your name:";
            } else if (inputs.length === 2) {
                response = "CON Enter your age:";
            } else {
                response = `END Thank you ${inputs[1]}, age ${inputs[2]}! You are now registered.`;
            }
        } else if (inputs[0] === "2") {
            response = "CON Enter your account number:";
        } else if (inputs[0] === "3") {
            response = "END Thank you for using our service. Goodbye!";
        } else {
            response = "END Invalid option. Please try again.";
        }

        res.set("Content-Type", "text/plain");
        res.send(response);
    } catch (error) {
        console.error("Error handling USSD call:", error);
        res.status(500).send("END An error occurred while processing your request.");
    }
};
