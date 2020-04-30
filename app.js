const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')

const MongoDB = require('./mongo')
const { config } = require('./config')

const app = new Koa()
const router = new Router()
const mongo = new MongoDB(config.mongoUrl, config.mongoOptions)

app.proxy = true // 当真正的代理头字段将被信任时
app.keys = ['koa-mongo'] //  签名的 cookie 密钥数组

onerror(app)

// logger
app.use(logger())
app.use(bodyParser({ jsonLimit: '4mb' }))

mongo
  .connect()
  .onError()
  .onDisconnected()
  .onOpen()

// 应用路由
const appRouter = require('./src/router')
appRouter(router)
app.use(router.routes())



app.listen(3000)
console.log('koa-mongo server listening on port 3000')