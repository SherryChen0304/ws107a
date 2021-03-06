const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

 // 添加路由
 router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>'
})

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})

/*router
  .get('/', async (ctx, next) => {
    ctx.body = 'Hello World!';
  }) 查

  .post('/users', async (ctx, next) => {
    // ... 
  }) 增

  .put('/users/:id', async (ctx, next) => {
    // ... 
  }) 改

  .del('/users/:id', async (ctx, next) => {
    // ... 
  }) 刪

  .all('/users/:id', async (ctx, next) => {
    // ... 
  });
  all 方法通常用于匹配一组路由或者全部路由从而做一些统一设置和处理，
  也可以处理不确定客户端发送的请求方法类型的情况。*/