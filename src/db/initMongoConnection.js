

import mongoose from 'mongoose';

import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    console.log('ENV:', {
  user: process.env.MONGODB_USER,
  pwd: process.env.MONGODB_PASSWORD,
  url: process.env.MONGODB_URL,
  db: process.env.MONGODB_DB,
});

    await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,);
    console.log('MongoDB connection successfully established!');
  } catch (error)
   {
    console.error('Error while setting up mongo connection:', error);
    
   }
};