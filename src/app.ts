'use strict';

const cors = require('@koa/cors');
const Koa = require('koa');
const body = require('koa-bodyparser');
const compress = require('koa-compress');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const helmet = require('koa-helmet');

const powered = require('./middleware/powered');
const rt = require('./middleware/rt');
const router = require('./router');

const app = new Koa();

app.use(compress());
app.use(rt);
app.use(conditional());
app.use(etag());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(powered);
app.use(body());

app.context.cache = {};

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`> yieldhub-api running! (:${port})`);
