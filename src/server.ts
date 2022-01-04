import express, { Request, Response } from 'express';

import connect from './utils/db_connect';
const app = express();
const port = process.env['PORT'] || 4000;

app.get('/', (_, res: Response) => {
    res.send('huii');
});

app.listen(port, () => {
    console.log(`App started listening on port ${port}`);
    connect();
});
