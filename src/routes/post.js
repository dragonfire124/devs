const express = require("express");     
const post = require("../usecases/posts");
const { authHandler } = require("../middlewares/authHandlers");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await post.getAll();
    res.json({
      success: true,
      payload: posts,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievedPost = await post.getById(id);
    res.json({
      success: true,
      payload: retrievedPost,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", authHandler, async (req, res, next) => {
  try {
    
    const { tokenPayload } = req.params
    
    const { imagenpost,imagenusuario,name,date, header,tags,createdby} = req.body;

    const createdPost = await post.create( imagenpost,imagenusuario,name,date, header,tags,createdby);

    res.json({
      success: true,
      message: "Post creada",
      payload: createdPost,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authHandler,  async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const { tokenPayload } = req.params
    console.log(tokenPayload.sub)
    const updatedPost = await post.update(id, req.body, tokenPayload.sub);
    console.log(updatedPost)
    if(updatedPost==null){

      res.json({
        success: false,
        message: " No tiene permiso para actualizar el post ",
        
      });
      return

    }
    
    res.json({
      success: true,
      message: "Post actualizada",
      payload: updatedPost,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authHandler,  async (req, res, next) => {
  try {
    console.log(req)
    const reqId = req.body.user._id
    
    const { id } = req.params;

    const deletedPost = await post.del(id, reqId);
    
    if (deletedPost==null){

    res.json({
      success: false,
      message: " No tiene permiso para borrar el post ",
      
    });
    return
    }

    res.json({
      success: true,
      message: "Post eliminado",
      payload: deletedPost,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
