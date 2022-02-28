import mongoose from 'mongoose';

interface addressInterface {
    door_no: string;
    street: string;
    village: string;
    city: string;
    district: string;
    state: string;
    pincode: number;
}

export interface WorkerInterface {
    fullname: string;
    profileImage: string;
    age: number;
    sex: 'male' | 'female' | 'prefer not to say';
    expertise: 'Barber' | 'Carpenter' | 'Painter' | 'Mason' | 'Physical Labour';
    mobile: number;
    fromTime: string;
    toTime: string;
    address: addressInterface;
    location: string;
}

const WorkersSchema = new mongoose.Schema<WorkerInterface>({
    fullname: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        enum: ['male', 'female', 'prefer not to say'],
        required: true,
    },
    expertise: {
        type: String,
        enum: ['Barber', 'Carpenter', 'Painter', 'Mason', 'Physical Labour'],
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    fromTime: {
        type: String,
        required: true,
    },
    toTime: {
        type: String,
        required: true,
    },
    address: {
        door_no: {
            type: String,
        },
        street: {
            type: String,
        },
        village: {
            type: String,
        },
        city: {
            type: String,
        },
        district: {
            type: String,
        },
        state: {
            type: String,
        },
        pincode: {
            type: String,
        },
    },
    location: {
        type: String,
        required: true,
    },
});

export default mongoose.model<WorkerInterface>('Workers', WorkersSchema);
