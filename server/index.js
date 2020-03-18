'use strict';

const PATH =  require('path'),
    APP = require('koa')(),
    // router = require('koa-router')(),
    KOA_STATIC = require('koa-static')
    // multer = require('koa-multer')
    // upload = multer({ dest: 'uploads/' });

APP.use(KOA_STATIC(PATH.join(__dirname, 'views')),{index: true});

APP.use(require('./routers.js').routes());

APP.listen(3000);

console.log('Server running at http://localhost:3000/');