import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";

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

app.use('/api/user', userRouter);