import { Schema, Document, Types, model } from 'mongoose';


export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
}

const UserSchema:Schema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
export default model<IUser>('User',UserSchema)