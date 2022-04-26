const express = require("express");
const user = require("../usecases/user");
const { authHandler } = require("../middlewares/authHandlers");

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
    const { name,imagenusuario,password } = req.body;

    const userCreated = await user.create(name,imagenusuario,password);

    res.json({
      success: true,
      message: "User created",
      payload: userCreated,
    });
  } catch (error) {
    next(error);
  }
});


router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Usuario ${id} actualizado` + name });
});

module.exports = router;
