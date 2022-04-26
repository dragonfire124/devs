const Post = require ("../../modules/post").model;


const getAll = async () => {
    return await Post.find({}).exec();
  };
  
  const getById = async (id) => {
    return await Post.findById(id).exec();
  };
  
  const create = async (id, imagenpost,imagenusuario,name,date, header,tags) => {
    const post  = new Post({id, imagenpost,imagenusuario,name,date, header,tags });
  
    return await post.save();
  };
  
  const update = async (id, imagenpost,imagenusuario,name,date, header,tags) => {
    const post = await Post.findById(id).exec();
  
    
    post.imagenpost = imagenpost;
    post.imagenusuario = imagenusuario;
    post.name = name;
    post.date = date;
    post.header= header;
    post.tags = tags

    return await post.save();
  };
  
  const del = async (id) => {
    return await Post.findByIdAndDelete(id).exec();
  };

  
module.exports = { getAll, getById, create, update, del };