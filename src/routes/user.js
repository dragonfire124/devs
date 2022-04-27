const express = require("express");
const user = require("../usecases/user");
const { authHandler } = require("../middlewares/authHandlers");
const { update } = require("../usecases/posts");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      
      const users = await user.getAll();
      res.json({
        success: true,
        payload: users,
      });
    } catch (error) {
      next(error);
    }
  });


router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievedUser = await user.getById(id);
    res.json({
      success: true,
      payload: retrievedUser,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name,imagenusuario,password,email } = req.body;

    const userCreated = await user.create(name,imagenusuario,password,email);

    res.json({
      success: true,
      message: "User created",
      payload: userCreated,
    });
  } catch (error) {
    next(error);
  }
});


router.put("/:id", async(req, res,next) => {
  try {
    const { id } = req.params;
    const userUpdate  = await user.update(id,req.body)
    
    res.json({     
      success: true,
      message: "User actualizado",
      payload: userUpdate});
  }catch (error) {
    next(error);
  }
});

module.exports = router;
