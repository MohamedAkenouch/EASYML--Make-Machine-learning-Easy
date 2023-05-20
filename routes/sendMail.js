import express from 'express';
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const router = express.Router();


dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});
    
router.post("/send-mail", function (req, res) {
    const { to, subject, text } = req.body;
    console.log(req.body.to);
    console.log(subject);
    console.log(text);

    let mailOptions = {
        from: process.env.EMAIL,
        to: "youness.aabaoui7@gmail.com",
        subject: subject,
        text: text + " from " + to,
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
        console.log("Error " + err);
        } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
        }
    });
});

export default router;