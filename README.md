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

Directions:

1. must have node and npm installed
2. clone the repo to a local directory
3. cd nodeJax
4. npm install
5. edit the /data/apiroutes.json to contain the routes & data you want
6. node app

