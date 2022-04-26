const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  name:{type:String, required: true},
  imagenusuario:{type:String, required: true},
  password:{type:String, required: true},
  
 })

module.exports = {
  schema,
  model: mongoose.model("User", schema),
};
