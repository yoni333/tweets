'use strict';
module.exports = function(app) {

  var appController = require('../controller/app-controller');
  var bulkDataController = require('../controller/bulk-data.controller');
    console.log('routs init')
  app.route('/').get(function (req, res) {
    res.sendFile(path.join(__dirname, 'public/static', 'index.html'));
  });
  app.route('/data').get(appController.getAllTweets);
  app.route('/more-then').get(appController.getTweetsMoreThan);
  app.route('/test-live').get(appController.getTestLiveServer);
  //app.route('/add-data').get(bulkDataController.insertAllTweets);
}