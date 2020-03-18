'use strict';

const router = require('koa-router')(),
    parse = require('co-busboy'),
    util = require('util'),
    fs = require('fs');

router.post('/uploadImage', function *(next){
    let parts = parse(this.req);

    console.log("-----------------------")
    console.log(parts)
    console.log("-----------------------")

    let part;

    while (part = yield parts) {
        console.log(yield parts)
        if (util.isArray(part)) {
            let name = part[0];
            let value = part[1];
        } else {
            let streamName = './uploads/' + part.filename;
            let stream = fs.createWriteStream(streamName);
            console.log("***********************")
            console.log(part)
            console.log("***********************")
            part.pipe(stream);
        }
    }

    this.body=1;
});

router.get('/asyncData',function(ctx){
    ctx.body = {
        status:'SUCCEED',
        word:'Hello World!'
    };
})

module.exports = router;