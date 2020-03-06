const fetch = require('node-fetch')
const Tweets = require('../moedl/app-model');

// we use this 2 functions only once - to insert the tweets to mongo atlas

function fetchTweetsJson() {

  return fetch(`http://trumptwitterarchive.com/data/realdonaldtrump/2018.json`).then(res => res.json());

}

exports.insertAllTweets = async function (req, res) {
  try {
    
    const response = await fetchTweetsJson();
    console.log('start insert many');
    
    const dbResult = await db.collection('tweets').insertMany(response);
    console.log('end insert many');

    res.send({message:'finish add data to mongo atlas'});
  } catch{
    res.send({ response: 'error - fail add data to mongo atlas' });
  }
  res.end();
};