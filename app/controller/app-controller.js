const Tweets = require('../moedl/app-model');




exports.getAllTweets = async function (req, res) {
  try {
    
    const response = await fetchTweetsJson();
    res.send(response);
  } catch{
    res.send({ response: 'Error' });
  }
  res.end();
};

exports.getTweetsMoreThan = async function (req, res) {
  try {
    console.log('getTweetsMoreThan 1')
    const query =  Tweets.find({});
    query.limit(5);
    query.exec((err, results)=> {
      if (err) {
        console.log('err in exce rr');
        
        // res.send(err);
      }else{
        console.log('getTweetsMoreThan 2',results)
        
        res.send(results);
      }
    })

    
  } catch{
    console.log('err in catch ');

    res.send({ response: 'Error' });
  }
};

