/**
 * Created by pc on 2014/11/10.
 */

var express = require('express');
var router = express.Router();
var service=require('../service/index');
/* GET users listing. */
router.get('/', function(req, res) {
    service.readAllRows(function(result){
        //res.setHeader('Content-Type', 'application/json;charset=utf-8');
        //res.send(result);
        //console.log(result);
        res.render('show', {items:result});
    });
});

module.exports = router;