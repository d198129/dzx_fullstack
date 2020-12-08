//库里有哪些collection 就有那些集合的含义
//DB 驱动
//import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);

const ObjectId = mongoose.Schema.Types.ObjectId;

//电商 Product
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer:{type:ObjectId,ref:'Manufacturer'}
})
const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
});
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);
module.exports = { Product,Manufacturer }