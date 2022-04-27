const usersRouter = require ("./user")
const postsRouter = require("./post")
const authRouter = require ("./auth")

const apiRouter = (app)=>{
    app.use("/post",postsRouter)
    app.use("/users",usersRouter)
    app.use("/auth",authRouter)

}

module.exports = apiRouter