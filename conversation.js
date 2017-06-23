var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
  username: '979e84c6-589d-44e5-9ed2-9a4b7174346d',
  password: 'WfXuDwZeHJAm',
  version: 'v1',
  version_date: '2017-04-21'
});

var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
	
	conversation.message({
		workspace_id: '2ae13df0-ac03-4b34-b3e6-16e07ddb9819',
		input: {'text': d.toString().trim()}
		},  function(err, response) {
		if (err)
			console.log('error:', err);
		else
			console.log(JSON.stringify(response['output']));
		});
  });

