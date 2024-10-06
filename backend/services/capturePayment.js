const { instance } = require("../config/razorpay");

exports.capturePayment = async (amount) => {
  const options = {
    amount: Number(amount * 100),
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);
  return order;
  console.log(order);
};
