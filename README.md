nodeJax
=======

A base node.js server setup that takes a JSON config file that contains URL routes and JSON return strings, so it is really quick to spin up a fake API.

In the /data/ folder, create or edit the apiroutes.json file to contain an array of routes and the json each route should return

	[	
		{
			"url": "test",
			"json": "{'test', 'test'}"
		},
		{
			"url": "test2",
			"json": "{'test2', 'test2}"
		}
	]

