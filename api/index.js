import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
try {
    console.log('connected to MongoDb')
} catch (error) {
    console.log(error);
}
});

const app = express();

app.listen(5000, () => {
    console.log('server is running on port 5000');
});

app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});