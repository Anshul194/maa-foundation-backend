const express=require("express");
const payRouter=express.Router();
const {capture,paymentVerification,getKey}=require('../Controller/PaymentController');

payRouter.post('/capturePayment',capture);
payRouter.post('/verification',paymentVerification);   
payRouter.get('/getKey',getKey);

module.exports=payRouter;