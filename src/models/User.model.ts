import mongoose from 'mongoose';

export interface UserInterface {
    username: string;
    password: string;
    location: string;
    mobile: string;
}

const UserSchema = new mongoose.Schema<UserInterface>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
});

export default mongoose.model<UserInterface>('User', UserSchema);
