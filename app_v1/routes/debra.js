var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('debra', { title: 'Debra' });
});

router.post('/',function(req,res){
  var base_url_m=req.body.base_url_m,base_url_f=req.body.base_url_f, path_excel=req.body.path_excel;
  res.render('debra',{
    title:'Debra',
    debraresult : result,
  });
});

module.exports = router;
