var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  var isApp = false;
  if (req.query.DEVICE== 'ios' || req.query.DEVICE == 'android') {
    isApp = true;
  }
  var thisUrl = req.url;
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.flag = isApp;
        res.render('index',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});

router.get('/next', function(req, res, next) {
  var isApp = false;
  if (req.query.DEVICE== 'ios' || req.query.DEVICE == 'android') {
    isApp = true;
  }
  var thisUrl = req.url;
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.flag = isApp;
        res.render('next',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});

router.get('/subway', function(req, res, next) {
  var isApp = false;
  if (req.query.DEVICE== 'ios' || req.query.DEVICE == 'android') {
    isApp = true;
  }
  var thisUrl = req.url;
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.flag = isApp;
        res.render('subway',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});

router.get('/sign', function(req, res, next) {
  var isApp = false;
  if (req.query.DEVICE== 'ios' || req.query.DEVICE == 'android') {
    isApp = true;
  }
  var thisUrl = req.url;
  var shareUrl = encodeURIComponent((global.browserURL + thisUrl).split('#')[0]);
  console.log('shareUrl.................'+(global.browserURL + thisUrl).split('#')[0]);
  superagent
    .get(global.wechatURL + '/wechat_api/jsconfig?url=' + shareUrl)
    .end(function(err2, res2) {
      if (res2 !== undefined && res2.ok) {
        res2.body.browserUrl = global.browserURL;
        res2.body.flag = isApp;
        res.render('sign',res2.body);
      } else {
        console.error('微信分享api错误。');
      }
    });
});
module.exports = router;
