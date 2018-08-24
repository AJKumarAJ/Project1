var Log = require('../models/spouse_events.js');

exports.log = function(req,res){
	if(req.session.passport.user._id)
	{
		Log.find({viewer_id:req.session.passport.user._id,task_status:2},function (err,event_log) { 
			if(err) throw err;
			
			res.render('taskslog',{
				title : 'Events Log',
				event_log : event_log 
			});

		});
	}
}