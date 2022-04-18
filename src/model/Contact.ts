import { Schema, Document, Types, model } from 'mongoose';

type accountType = 'professional' | 'personal';

export interface IContact extends Document {
    user: string;
    name: string;
    email: string;
    phone: string;
    type: accountType;
}

const ContactSchema: Schema = new Schema({
    user: {
        type: { type: Types.ObjectId, required: true, ref: 'User' },
        ref: 'users'
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String
      },
      type: {
        type: String,
        default: 'personal'
      },
      date: {
        type: Date,
        default: Date.now
      }
})

export default model<IContact>('Contact',ContactSchema);