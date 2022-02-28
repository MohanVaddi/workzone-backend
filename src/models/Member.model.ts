import mongoose from 'mongoose';

export interface MemberInterface {
    name: string;
    age: number;
}

const memberSchema = new mongoose.Schema<MemberInterface>({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

export default mongoose.model<MemberInterface>('Member', memberSchema);
