const express=require('express')
const connectDb =require('./config/dbConnection')
const  cloudinaryConfig = require('./config/cloudinarydb')
const route = require('./Routes/index');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')

const app=express();

dotenv.config();
app.use(express.json())

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const port=process.env.Port||5000;

cloudinaryConfig()
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`App is running on ${port}`)
    })
})
.catch(err=>{
    console.error('Failed to start server:', err);
    process.exit(1); 
})

//Routes
//app.use("/api/event",EventRoute);

app.use("/api",route);