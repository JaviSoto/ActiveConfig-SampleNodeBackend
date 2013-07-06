var express = require("express");
var app = express();
app.use(express.logger());

app.get('/active_config', function(request, response) {
	var user_id = request.query.userID || 0

	response.send({
		meta: {
			format_version_string: "1.0",
			creation_time: new Date().toString(),
		},
		config_sections: {
			SampleViewConfiguration: {
				settings: {
					ViewBackgroundColor: {
						value: {
							red: Math.sin(45 / user_id) / user_id,
							green: Math.cos(30) / user_id,
							blue: 1 / user_id,
						}
					},
					LabelText: {
						value: "This is a label value for user ID " + user_id
					},
					ButtonEnabled: {
						value: (user_id == 3)
					}
				}
			}
		}
	})		
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});