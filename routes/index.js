
/*
 * GET home page.
 */

var apiRoutes = require('../data/apiroutes.json');

exports.index = function(req, res){
  res.render('index',{ routes : apiRoutes, apiName : "API"});
};