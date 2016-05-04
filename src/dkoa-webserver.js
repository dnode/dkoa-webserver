'use strict';

require('dnewrelic');

const app = require('dkoa');
app.use(require('dkoa-headers'));
app.use(require('dkoa-http-auth'));
app.use(require('koa-compress')());
app.use(require('koa-static')('www'));

module.exports = app;
