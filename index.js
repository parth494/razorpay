var Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: '<key_id>',
  key_secret: '<key_secret>'
})
// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var port = process.env.PORT || 8082;
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(express.static(__dirname + '/')); // set the static files location /public/img will be /img for users
// routes ==================================================
app.post('/capture', function(req, res) {
  let callback = (err, resp)=> {
    if(!!err){
      console.log("Unsuccessfull payment at RazorPay");
      res.send("Error")
    }
    else{
      console.log("Successfull payment at RazorPay");
      res.send("Successfull");
    }
  }
  instance.payments.capture(req.body.razorpay_payment_id, 2000, callback);
});
app.get('*', function(req, res) {
  res.sendfile('./index.html');
});
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
