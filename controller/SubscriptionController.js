const { subscribeUser } = require('../services/SubscriptionService');

const subscribeToUpdates = async (req, res) => {
  const { email } = req.body;

  try {
    const subscription = await subscribeUser(email);
    res.status(200).json({ message: 'Subscription successful', subscription });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  subscribeToUpdates
};
