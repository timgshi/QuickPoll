
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

Parse.Cloud.beforeSave("Poll", function(request, response) {
	var poll_id = 0;
	var query = new Parse.Query(Parse.Object.extend("Poll"));
	query.count({
		success: function(count) {
			poll_id = count;
			request.object.set("poll_id", poll_id);
			response.success();
		},
		error: function(error) {
			response.error(error);
		}
	});
});
