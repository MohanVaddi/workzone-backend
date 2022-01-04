import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connect = async () => {
    const mongodb_URI = process.env['mongodb_URI'];
    mongoose
        .connect(mongodb_URI as string)
        .then(() => {
            console.log('Database connected');
        })
        .catch((err) => {
            console.log(err);
            console.log('Unable to connect to database');
        });
};

export default connect;
