const mongoose = require('mongoose');

const connectDb = async () => {
  try {
   
    await mongoose.connect(process.env.MongoDb_Url, {

    });

    console.log(`Db connected`);

  } catch (error) {

    console.log(`error in db Connection ${error.message}`);
    
  }
};

module.exports = connectDb;
