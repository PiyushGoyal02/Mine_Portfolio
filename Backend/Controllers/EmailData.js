// const emailDetails = require("../Model/EmailModel")
const MailSender = require("../Mail/EmailConnect")

exports.SendMail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if the email is provided in the request
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "Email or uniqueId is missing." });
        }

        // Call MailSender function to send the email
        const mailResponse = await MailSender(name, email, message);

        if (mailResponse) {
            return res.status(200).json({ success: true, message: "Email sent successfully." });
        } else {
            return res.status(500).json({ success: false, message: "Failed to send email." });
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Server error." });
    }
};