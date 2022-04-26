
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: String, required: true, unique: true },
  imagenpost:{type:String, required: true},
  imagenusuario:{type:String, required: true},
  name:{type:String, required: true},
  date:{type: Date, default: Date.now },
  header: {type:String, required: true},
  tags:{type:String, required: true} 
 })
 
module.exports = {
  schema,
  model: mongoose.model("Post", schema),
}
