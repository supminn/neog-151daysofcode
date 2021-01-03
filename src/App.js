import {useState} from "react";
import './App.css';

//Calculate the number of days from 1st Jan 2021
let startDate = new Date("01/01/2021"); 
let todayDate = new Date();
let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
let maxTweetLen = 280;
function App() {
  const [tweetMessage, tweetMsgHandler] = useState(`Day ${diffInDays} of #151daysofcode \n #neogcamp`);
  const [tweetSize, tweetSizeHandler] = useState(36);

  const constFlow = (msgVal) =>{
    // maxTweetLen = 280 - msgVal.length; // sort this logic
    // after hashtags are choosen, we cannot type anymore - it refreshes the tweet
    console.log(maxTweetLen);
    tweetSizeHandler(msgVal.length);
    tweetMsgHandler(msgVal);
  }

  const msgHandler = (event) => {
    let msgTweet = `Day ${diffInDays} of #151daysofcode \n`;
    msgTweet += `${event.target.value}`;
    msgTweet += '\n#neogcamp';
    constFlow(msgTweet);
  }

  const tagHandler = (event) => {
    let msgTweet = tweetMessage;
    msgTweet += ` ${event.target.innerText}`;
    constFlow(msgTweet);
  }
  
  const tweetHandler = () => {
    let finalMessage = encodeURIComponent(tweetMessage);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <div className="App">
      <br/><br/>
      <div className="data-section">
        <br/>
      <textarea className="txt-tweet" maxLength={maxTweetLen} placeholder="Enter the tweet message here" onChange={msgHandler}></textarea>
      <br/>
      <button className="btn-tag" type="button" onClick={tagHandler}>#webdev</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#JavaScript</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#ReactJS</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#codingisfun</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#teamtanay</button>
      <br/><br/>
      <span className="btn-tweet" onClick={tweetHandler}>Tweet <img src="twitter.svg" alt="Tweet"/></span>
      <br/><br/>
      <div className="data-section">
      <h3>⬇ Preview of your tweet ⬇</h3>
      <pre className="txt-output">{tweetMessage}</pre>
      <h4 className="limit-tweet">{tweetSize}/280</h4>
      </div>
      <br/>
      </div>
    </div>
  );
}

export default App;
