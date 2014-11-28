var express = require('express');
var router = express.Router();
var service=require('../service/index');
/* GET users listing. */
router.get('/', function(req, res) {
    service.createDB();
  res.send('respond with a resource');
});

module.exports = router;
