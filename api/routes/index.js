var express = require('express');
var router = express.Router();
var mongo = require('mongodb-curd');
var db = '1612B';
var col = 'week3';
/* GET home page. */
router.post('/api/find', function(req, res, next) {
    mongo.find(db, col, function(result) {
        if (result) {
            res.json({ code: 1, msg: '找到了', data: result })
        } else {
            res.json({ code: 0, msg: '无数据' })
        }
    })

});

module.exports = router;