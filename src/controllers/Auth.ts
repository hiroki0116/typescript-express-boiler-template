import { Request, Response } from 'express';

export const getAuth = (req: Request, res: Response) => {
    res.send('Get Auth')
}