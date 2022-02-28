import express, { Request, Response } from 'express';
import { WorkerInterface } from '../models/Workers.model';
import WorkersModel from '../models/Workers.model';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const {
        fullname,
        profileImage,
        age,
        sex,
        expertise,
        mobile,
        fromTime,
        toTime,
        address,
        location,
    }: WorkerInterface = req.body;
    try {
        const worker = new WorkersModel({
            fullname,
            profileImage,
            age,
            sex,
            expertise,
            mobile,
            fromTime,
            toTime,
            address,
            location,
        });
        await worker.save();
        res.send(worker);
    } catch (err) {
        console.error(err);
    }
});

export default router;


