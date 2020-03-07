import React, { Component } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import './App.css';

function TweetsChart(props) {
  const tweets = props.tweets

  const chartData = tweets.map(tweet=>[Date.parse(tweet.created_at),tweet[props.type]])
  // console.log(tweets)
  if (tweets.length === 0) {
    return null
  } else {
    const options = {
      title: {
        text: props.title
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e of %b'
        }
    },
      series: [{
        type: 'bar',
        data: chartData,
        // pointStart: Date.UTC(2010, 0, 1),
        // pointInterval: 24 * 3600 * 1000 // one day
      }]
    }

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    )
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = { tweets: [] }
  }

  fetchData() {
    axios.defaults.baseURL = 'https://rocky-mesa-09234.herokuapp.com';

    const url = '/data';
    axios.get(url)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ tweets: response.data })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {

   
    return (
      <div className="App">


        <TweetsChart tweets={this.state.tweets} type="retweet_count" title="Trump Tweets - retweets"/>
        <TweetsChart tweets={this.state.tweets} type="favorite_count" title="Trump Tweets - favorite"/>

      </div>
    );
  }
}

export default App;
