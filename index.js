const express = require('express');
const connectDb = require('./config/dbConnection');
const cloudinaryConfig = require('./config/cloudinarydb');
const route = require('./Routes/index');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swaggerOptions');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3003',
    'https://maa-foundation.vercel.app',
    'http://maa-foundation.vercel.app',
    'http://localhost:5001',
    'https://maa-foundation-backend-6.onrender.com',
];

app.use(cors({
    origin: (origin, callback) => {
        // Debug CORS issue
        console.log(`Origin: ${origin}`);
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error(`Blocked by CORS: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

cloudinaryConfig();
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`App is running on ${port}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});

// Routes
app.use("/api", route);

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
