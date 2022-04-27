
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({

  imagenpost:{type:String },
  imagenusuario:{type:String, required: true},
  name:{type:String, required: true},
  date:{type: Date, default: Date.now() },
  header: {type:String, required: true},
  tags:{type:String, required: true},
  createdby:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required:true
  }

 })
 
module.exports = {
  schema,
  model: mongoose.model("Post", schema),
}
