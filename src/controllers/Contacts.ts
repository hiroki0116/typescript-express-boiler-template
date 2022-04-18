import { Request, Response } from 'express';

export const getContacts = (req: Request, res: Response) => {
    res.send('Get Contacts')
}