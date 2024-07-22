import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => { console.log("mongoDb is connected"); })
    .catch(err => { console.log(err); })

const app = express();

app.use(express.json()); //this allows json as input at backend
app.use(cookieParser());

app.listen(4000, () => {
    console.log('Server is running on port 3000!!');
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

//creating middleware for errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});