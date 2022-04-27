const jwt = require("../lib/jwt");
const user = require("../modules/user").model


const authHandler = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const verifiedToken = await jwt.verify(token);
    const userfound = await user.findOne(verifiedToken)
    req.params.tokenPayload = verifiedToken;
    req.body.user = userfound
    
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token inválido: " + error.message,
    });
  }
};

module.exports = { authHandler };