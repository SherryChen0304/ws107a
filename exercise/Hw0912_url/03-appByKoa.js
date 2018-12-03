const mount = require('koa-mount');
const Koa = require('koa');

// hello

const a = new Koa();

a.use(async function (ctx, next){
  await next();
  ctx.body = '<h2>你好！</h2>';
});

// 陳士茵

const b = new Koa();

b.use(async function (ctx, next){
  await next();
  ctx.body = '<h1>我的名字：陳士茵</h1>';
});

// 110610529

const c = new Koa();

c.use(async function (ctx, next){
  await next();
  ctx.body = '<h1>學號：110610529</h1>';
});
// app

const app = new Koa();

app.use(mount('/hello', a));
app.use(mount('/name', b));
app.use(mount('/id', c));
app.listen(3000);
console.log('listening on port 3000');