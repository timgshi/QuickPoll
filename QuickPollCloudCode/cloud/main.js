
Parse.Cloud.define("receiveSMS", function(request, response) {
  var SMS = Parse.Object.extend("SMS");
  var newSMS = new SMS();
  newSMS.set("from", request.params.From);
  newSMS.set("from_zip", request.params.FromZip);
  newSMS.set("body", request.params.Body);
  newSMS.set("sms_sid", request.params.SmsSid);
  newSMS.set("to", request.params.To);
  newSMS.save(null, {
  	success: function(savedSMS) {
  		response.success(savedSMS);
  	}, error: function(obj, error) {
  		response.error(error);
  	}
  });
});
