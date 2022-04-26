const express = require("express");     
const post = require("../usecases/posts");
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

router.post("/", async (req, res, next) => {
  try {
    const { id, imagenpost,imagenusuario,name,date, header,tags } = req.body;

    const createdPost = await post.create(id, imagenpost,imagenusuario,name,date, header,tags);

    res.json({
      success: true,
      message: "Post creada",
      payload: createdPost,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const {imagenpost,imagenusuario,name,date, header,tags } = req.body;

    const updatedPost = await post.update(id, imagenpost,imagenusuario,name,date, header,tags);

    res.json({
      success: true,
      message: "Post actualizada",
      payload: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPost = await post.del(id);

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
