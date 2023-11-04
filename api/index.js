import express from 'express';
import mongoose from 'mongoose';

mongoose.connect();

const app = express();

app.listen(5000, () => {
    console.log('server is running on port 5000');
});