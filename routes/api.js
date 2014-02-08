
/*
 * GET api
 */
var fs = require('fs');
var file = __dirname + './../data/apiroutes.json';

exports.getjson = function(req, res){
    var routeRequested = req.params.param
    
    res.setHeader('Content-Type', 'application/json');
    
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            res.end("{'error', 'Cannot read the apiroutes.json file.'}");
            return;
        }
     
        try {
            data = JSON.parse(data);
        } catch (e) {
            res.end("{'error', 'Cannot parse the apiroutes.json file as JSON.'}");
            return;
        }

     
        for (var i = 0; i < data.length; i++) {
            if (data[i].url === routeRequested) {
                res.setHeader('Content-Type', 'application/json');
                res.end(data[i].json);
                return;
            }
        }
        res.end("{'error', 'No matching route'}");
    });
};