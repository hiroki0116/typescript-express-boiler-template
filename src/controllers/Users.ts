import { Request, Response } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');


export const getUsers = (req: Request, res: Response) => {
    res.send('Get users');
}


export const registerUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;
    if(!name){
        res.status(400).send('Please enter name to rigister');
    }
    if(!email){
        res.status(400).send('Please enter email to rigister');
    }
    if(!password){
        res.status(400).send('Please enter password to rigister');
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
          }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
              id: user.id
            }
          };
        
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
              expiresIn: 360000
            },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}