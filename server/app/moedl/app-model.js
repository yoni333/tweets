const  mongoose = require('mongoose');
const uri = "mongodb+srv://yoni333:qaz123wsx@cluster0-zth12.gcp.mongodb.net/tweets?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('conncted');
  
});
// const TweetsCollection = db.collection('tweets');

const  tweetSchema = new mongoose.Schema({
  source:String,
id_str:String,
text:String,
created_at:Date,
retweet_count:Number,
in_reply_to_user_id_str:String,
favorite_count:Number,
is_retweet:Boolean
});


const Tweets = mongoose.model('Tweets',tweetSchema);
module.exports = Tweets;