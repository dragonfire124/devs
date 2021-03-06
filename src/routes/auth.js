const express = require('express');
const user = require('../usecases/user');
const jwt = require('../lib/jwt');

const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const retrievedUser = await user.getByEmail(email);
        const isMatch = await user.authenticate(retrievedUser, password);
        console.log(isMatch)
        if (isMatch) {
            const token = await jwt.sign({
                sub: retrievedUser._id 
            });
            res.json({
                success: true,
                payload: token,
            });
        } else {
            res
            .status(403)
            .json({
                success: false,
                message: "email or password is incorrect",
            });
        };
    } catch (error) {
        next(error);
    };
});

module.exports = router;