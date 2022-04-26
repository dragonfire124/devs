const User = require ("../../modules/user").model;


const getAll = async () => {
    return await User.find({}).exec();
  };
  
  const getById = async (id) => {
    return await User.findById(id).exec();
  };
  
  const create = async (name,imagenusuario,password) => {
    const user  = new User({name,imagenusuario,password});
  
    return await user.save();
  };
  
  const update = async (id,name,imagenusuario,password) => {
    const user = await User.findById(id).exec();
  
    post.imagenusuario = imagenusuario;
    post.name = name;
    post.password = password

    return await user.save();
  };
  
  const del = async (id) => {
    return await User.findByIdAndDelete(id).exec();
  };

  
module.exports = { getAll, getById, create, update, del };