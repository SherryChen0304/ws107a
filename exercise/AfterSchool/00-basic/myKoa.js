var app = {
    ctx: { port: 3000, name: 'myapp' }, jobList: []
}

app.use = function (work) {
    app.jobList.push(work);
}

app.run = function () {
    for (let work of app.jobList) {
        work(app.ctx);  // 1. showCtx(app.ctx)  2. hello(app.ctx)
    }
}

function showCtx(ctx) {
    console.log('%j', ctx);
}

function hello() {
    console.log('hello!');
}

app.use(showCtx);
app.use(hello);

app.run();