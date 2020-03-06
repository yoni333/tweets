'use strict';
module.exports = function(app) {

  var appController = require('../controller/app-controller');
  var bulkDataController = require('../controller/bulk-data.controller');

  app.route('/data').get(appController.getAllTweets);
  app.route('/more-then').get(appController.getTweetsMoreThan);
  //app.route('/add-data').get(bulkDataController.insertAllTweets);
}