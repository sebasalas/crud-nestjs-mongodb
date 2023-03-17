import { Schema } from 'mongoose';

export const ItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
//});
}, { versionKey: false }); // This is to avoid the __v field in the database