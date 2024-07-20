const Subscription = require('../models/Subscription');
const {sendSubscriptionConfirmation}=require('../utils/mailer')
const subscribeUser = async (email) => {
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }

  const existingSubscription = await Subscription.findOne({ email });
  if (existingSubscription) {
    throw new Error('Email already subscribed');
  }


  const newSubscription = new Subscription({ email });
   await sendSubscriptionConfirmation(email);
  await newSubscription.save();
  return newSubscription;
};


const getAllSubscribedEmails = async () => {
    const subscriptions = await Subscription.find({});
    return subscriptions.map(sub => sub.email);
  };

module.exports = {
  subscribeUser,getAllSubscribedEmails
};
