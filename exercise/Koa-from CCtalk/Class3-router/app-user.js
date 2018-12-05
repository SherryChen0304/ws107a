const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

 // 添加路由
 router.get('user', '/users/:id', async (ctx, next) => {
    ctx.response.body = `<h1>user page</h1>`
}) //取名router為user

const userUrl = router.url('user', 3);
console.log('userUrl: ', userUrl);
// => 生成路由 "/users/3" 
 
const userUrl2 = router.url('user', { id: 4 });
console.log('userUrl2: ', userUrl2);
// => 生成路由 "/users/4" 
 
router.use(function (ctx, next) {
  // 重定向到路由名称为 “sign-in” 的页面 
  ctx.redirect(ctx.router.url('sign-in'));
})

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})

  
 