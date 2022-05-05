import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Test } from '../../../Models/Testing.js';
import { ZionclopediaItem } from '../../../Models/Zionclopedia.js';

dotenv.config();
console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  auth: {
    authSource: 'admin',
  },
  user: process.env.DB_USER,
  pass: process.env.DB_PWD,
});
const db = mongoose.connection;
db.on('error', (error) => {
  console.log('connection error: ', error);
});
db.once('open', () => {
  console.log('Connected successfully');
});

export let fetchDB = {
  zionoclopedia: {
    findAll: async () => await ZionclopediaItem.find(),
    searchByTitle: async (query) =>
      await ZionclopediaItem.where('title').equals(query),
    searchById: async (query) =>
      await ZionclopediaItem.where('title').equals(query),
  },
  test: {
    findAll: async (query) => await Test.find(),
    searchByTitle: async (query) =>
      await Test.where('title').equals(query),
    searchById: async (query) =>
      await Test.where('title').equals(query),
  },
};

// console.log(await fetchDB.test.searchByTitle("Blockchain"))
// console.log(await fetchDB.test.findAll())
