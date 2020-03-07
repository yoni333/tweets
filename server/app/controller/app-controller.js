const Tweets = require('../moedl/app-model');



exports.getTestLiveServer = async function (req, res) {
  try {

    res.send({ message: 'server is up' });
  } catch{
    res.send({ response: 'Error' });
  }
  res.end();
};


exports.getAllTweets = async function (req, res) {
  try {
    console.log('get all data')
    const query = Tweets.find({});
    query.limit(100); //limit it because heroku limited response time

    query.exec((err, results) => {
      if (err) {
        console.log('err in all data exce ');

        // res.send(err);
      } else {
        console.log('send all data ')

        res.send(results);
      }
    })


  } catch{
    console.log('err in catch ');

    res.send({ response: 'Error' });
  }
};

exports.getTweetsMoreThan = async function (req, res) {
  try {
    console.log('getTweetsMoreThan 1')
    const query = Tweets.find({});
    query.limit(5);
    query.exec((err, results) => {
      if (err) {
        console.log('err in exce rr');

        // res.send(err);
      } else {
        console.log('getTweetsMoreThan 2', results)

        res.send(results);
      }
    })


  } catch{
    console.log('err in catch ');

    res.send({ response: 'Error' });
  }
};

