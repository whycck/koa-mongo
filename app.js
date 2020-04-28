const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

app.proxy = true // 当真正的代理头字段将被信任时
app.keys = ['koa-mongo'] //  签名的 cookie 密钥数组

onerror(app)

// logger
app.use(logger())
app.use(bodyParser())

// 应用路由
const appRouter = require('./src/router')
appRouter(router)
app.use(router.routes())



app.listen(6000)
console.log('koa-mongo server listening on port 6000')