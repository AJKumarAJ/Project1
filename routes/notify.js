var onesignal = require('node-opensignal-api');
var onesignal_client = onesignal.createClient();

exports.push_notify = function(req,res){
	var params = {
	app_id: '715b9ced-15c4-4ff8-acd5-d6642f3b8e13',
		device_type: '5',
		notification_types:1
	};
	onesignal_client.players.create(params, function (err, response) {
		if (err) {
	    	console.log('Encountered error', err);
	  	} else {
	    	console.log(response);
	  	}
	});
}