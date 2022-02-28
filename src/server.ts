import express, { Request, Response } from 'express';

import connect from './utils/db_connect';
import WorkerSignupRoute from './routes/WorkerSignup.route';

const app = express();
const port = process.env['PORT'] || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// worker regestration route
app.use('/worker', WorkerSignupRoute);

app.get('/', (_, res: Response) => {
    res.send('working');
});

// User regestration route
app.post('/userReg', (req: Request, res: Response) => {});

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
    connect();
});
