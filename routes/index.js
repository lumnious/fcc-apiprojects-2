var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || null;
	var lang = req.headers['accept-language'].split(',')[0] || null;
	var software = req.headers['user-agent'].split('(')[1].split(')')[0] || null;
  res.send(JSON.stringify({
  		"ipaddress": ip,
  		"language": lang,
  		"software": software}));
});

module.exports = router;
