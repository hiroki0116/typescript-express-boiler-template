import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
      const dbUrl = process.env.DB_CLOUD
      //@ts-ignore
      await mongoose.connect(dbUrl);
      console.log('Connected to MongoDB')
    } catch (err) {
      console.log('DB Connection Error', err);
    }
  };