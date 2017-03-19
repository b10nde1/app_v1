var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('selenium', { title: 'selenium' });
});

module.exports = router;