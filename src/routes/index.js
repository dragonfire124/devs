const usersRouter = require ("./user")
const postsRouter = require("./post")

const apiRouter = (app)=>{
    app.use("/post",postsRouter)
    app.use("/users",usersRouter)
}

module.exports = apiRouter