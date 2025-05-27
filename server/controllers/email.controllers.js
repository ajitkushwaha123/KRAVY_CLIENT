import { sendEmail } from "../utils/send-email.js";
import User from "../models/User.js";
import { checkEmailFormat } from "../utils/helper.js";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendOTP = async (req, res) => {
  try {
    const { username, email, subject } = req.body;
    const code = req.otp;

    const emailData = {
      userName: username,
      userEmail: email,
      verificationCode: code,
    };

    const result = await sentOtpOnMsg("+918595443359", "1234");

    // const result = await sendEmail({
    //   to: email,
    //   subject:
    //     subject ||
    //     "✨ Verify Your Email for Kravy 🍴🥗 - Your OTP Code is Ready!",
    //   templateName: "otp",
    //   templateData: emailData,
    // });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

export const sendLoginOtp = async (req, res) => {
  try {
    const { email, subject } = req.body;
    const code = req.otp;

    const validEmail = checkEmailFormat(email);
    if (!validEmail.success) {
      return res.status(400).json({ success: false, msg: validEmail.msg });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    const emailData = {
      userName: user.username,
      userEmail: user.email,
      verificationCode: code,
    };

    console.log("Login  with otp");
    const result = await sentOtpOnMsg("+918595443359", "1234");

    // const result = await sendEmail({
    //   to: email,
    //   subject:
    //     subject ||
    //     "✨ Verify Your Email for Kravy 🍴🥗 - Your OTP Code is Ready!",
    //   templateName: "otp",
    //   templateData: emailData,
    // });

    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

export const sendRegistrationSuccessEmail = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const subject = req.subject || "Welcome to Kravy! 🎉 Your Account is Ready";

    const validEmail = checkEmailFormat(email);
    if (!validEmail.success) {
      return res.status(400).json({ success: false, msg: validEmail.msg });
    }

    const emailData = {
      userName: username,
      userEmail: email,
      verificationCode: "1234",
    };

    const result = await sendEmail({
      to: email,
      subject,
      templateName: "registration-success",
      templateData: emailData,
    });

    console.log("Email sent:", result);
    req.body.email = email;
    req.emailResult = result;

    next();
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

export const resetPasswordEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const subject = "🔒 Reset Your Kravy Password 🚀";

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    const resetPasswordToken =
      req.body.resetPasswordToken || user.resetPasswordToken;
    const resetPasswordExpires =
      req.body.resetPasswordExpires || user.resetPasswordExpires;

    if (!resetPasswordToken || !resetPasswordExpires) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid or missing token data" });
    }

    const validEmail = checkEmailFormat(email);
    if (!validEmail.success) {
      return res.status(400).json({ success: false, msg: validEmail.msg });
    }

    const emailData = {
      userName: user.username,
      userEmail: email,
      resetPasswordToken,
      resetPasswordExpires,
    };

    const result = await sendEmail({
      to: email,
      subject,
      templateName: "forget-password",
      templateData: emailData,
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

export const sendOrderSuccessEmail = async ({ username, email }) => {
  const subject =
    "🎉 Hooray! Your order has been created and is ready to be shipped! 🚚📦";

  const validEmail = checkEmailFormat(email);
  if (!validEmail.success) {
    throw new Error(validEmail.msg);
  }

  const emailData = {
    userName: username,
    userEmail: email,
    verificationCode: "1234",
  };

  try {
    const result = await sendEmail({
      to: email,
      subject,
      templateName: "registration-success",
      templateData: emailData,
    });

    console.log("Email sent:", result);
    return result;
  } catch (err) {
    console.error("Email sending failed:", err.message);
    throw new Error("Email sending failed");
  }
};

export const sentOtpOnMsg = async (phone, otp) => {
  console.log(phone, otp, process.env.TWILIO_PHONE_NUMBER);
  return client.messages.create({
    body: `🔐 Your OTP is: ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });
};
