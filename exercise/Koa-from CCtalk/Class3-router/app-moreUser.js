const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa();

/*router.get(
    '/users/:id',
    function (ctx, next) {
      return User.findOne(ctx.params.id).then(function(user) {
        // 首先读取用户的信息，异步操作
        ctx.user = user;
        next();
      });
    },
    function (ctx) {
      console.log(ctx.user);
      // 在这个中间件中再对用户信息做一些处理
      // => { id: 17, name: "Alex" }
    }
  );*/
router.get(
'/users/:id',
    async (ctx, next) => {
        ctx.response.body = '<h1>index page</h1>';
        ctx.user = {id:3, name:'xiaoming'};
        await next();
    },
    async (ctx) =>{
    console.log(ctx.user);
    // 在这个中间件中再对用户信息做一些处理
    // => { id: 3, name: 'xiaoming' }
});

app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})


