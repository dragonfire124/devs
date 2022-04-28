const post = require("../../modules/post");

const Post = require ("../../modules/post").model;


const getAll = async () => {
    return await Post.find({}).exec();
  };
  
  const getById = async (id) => {
    return await Post.findById(id).exec();
  };
  
  const create = async (imagenpost,imagenusuario,name,date, header,tags,createdby) => {
    const post  = await new Post({imagenpost,imagenusuario,name,date, header,tags,createdby});
   
    return await post.save();
  };
  
  const update = async (id, data, userId) => {
    const postfound = await Post.findById(id)

    

    if(postfound.createdby==userId) {
      
    const post = await Post.findByIdAndUpdate(id, data, {new:true})
    return  post
    }

    else{
      return null
    }   
  };
  
  const del = async (id,reqId) => {

  const postfound = await Post.findById(id)

 

 
  
  if(parseInt( reqId) == parseInt(postfound.createdby)) {
   
    return await Post.findByIdAndDelete(id).exec();
  }
  else{
    
    const res= postfound.createdby===reqId
    
    return {null: res}

  }
    
  };

 

module.exports = { getAll, getById, create, update, del };