const { instance } = require("../config/razorpay");
const crypto = require("crypto");
const dotenv=require("dotenv");
dotenv.config();

exports.payVerification = (body) => {
  return crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex");
};
