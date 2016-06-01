var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(
  	'<br>lang: ' + req.get('Accept-Language') +
  	'<br>test: ' + req.get('Host') +
  	'<br>test: ' + req.get('User-Agent') +
  	'<br>test: ' + JSON.stringify(req.headers) +
  	'<br>test: ' + req.ip +
  	'<br>test: ' + req.ips
  	)
});

module.exports = router;
