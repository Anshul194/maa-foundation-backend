const express=require('express')
const connectDb =require('./config/dbConnection')
const dotenv = require('dotenv')
const app=express();

dotenv.config();
app.use(express.json())

const port=process.env.Port||5000;

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`App is running on ${port}`)
    })
})
.catch(err=>{
    console.error('Failed to start server:', err);
    process.exit(1); 
})