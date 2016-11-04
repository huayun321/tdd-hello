var koa = require('koa');
var route = require('koa-route');
var data = require('./user-data');

var app = module.exports = koa();

app.use(route.get('/user', function *() {
   this.body = yield data.users.get();
}));

app.listen(3000);
