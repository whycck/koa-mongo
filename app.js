const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

const appRouter = require('./router')
appRouter(router)
app.use(router.routes())


app.listen(6000)
console.log('koa-mongo server listening on port 6000')