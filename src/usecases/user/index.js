const User = require ("../../modules/user").model;
const encrypt = require("../../lib/encrypt")

const getAll = async () => {
    return await User.find({}).exec();
  };
  
  const getById = async (id) => {
    return await User.findById(id).exec();
  };
  
  const create = async (name,imagenusuario,password,email) => {
    const hash = await encrypt.hashPassword(password)
    const user  = new User({name,imagenusuario, password:hash, email});
    return await user.save();
  };
  
  const update = async (id,data) => {

  const userfound =  await User.findByIdAndUpdate(id,data)
  
  return userfound
  };
  
  const del = async (id) => {
    return await User.findByIdAndDelete(id).exec();
  };

  const getByEmail = async (email) => {
    return await User.findOne({email}).exec();
  };

  const authenticate = async (user, password) => {
    const hash = user.password;
    console.log(password)
    console.log(user)
    return await encrypt.verifyPassword(password, hash);
}
module.exports = { getAll, getById, create, update, del, getByEmail, authenticate}