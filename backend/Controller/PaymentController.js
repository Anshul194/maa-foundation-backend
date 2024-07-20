const { instance } = require("../config/razorpay");
const { capturePayment } = require("../services/capturePayment");
const { payVerification } = require("../services/payVerificationService");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

exports.capture = async (req, res) => {
  try {
    const amount = req.body.amount;
    const order = await capturePayment(amount);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Could not Initiate Order",
    });
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body.bodyData;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(200).json({
        success: false,
        message: "Payment Failed Order info not provided",
      });
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = payVerification(body);

    if (expectedSignature === razorpay_signature) {
      return res
        .status(200)
        .json({ success: true, message: "Payment Verified" });
    }
    return res
      .status(200)
      .json({ success: "false", message: "Payment Failed" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Could not Verify payment",
    });
  }
};

exports.getKey = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.log("error while fetching key"), console.error(error);
  }
};
