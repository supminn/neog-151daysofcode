import {useState} from "react";
import './App.css';

//Calculate the number of days from 1st Jan 2021
let startDate = new Date("01/01/2021"); 
let todayDate = new Date();
let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

function App() {
  const [tweetMessage, tweetMsgHandler] = useState(`Day ${diffInDays} of #151daysofcode \n #neogcamp`);
  const [tweetSize, tweetSizeHandler] = useState(36);

  const msgHandler = (event) => {
    let msgTweet = `Day ${diffInDays} of #151daysofcode \n`;
    msgTweet += `${event.target.value}`;
    msgTweet += '\n#neogcamp';
    tweetSizeHandler(msgTweet.length);
    tweetMsgHandler(msgTweet);
  }

  const tagHandler = (event) => {
    let msgTweet = tweetMessage;
    msgTweet += ` ${event.target.innerText}`;
    tweetSizeHandler(msgTweet.length);
    tweetMsgHandler(msgTweet);
  }
  
  const tweetHandler = () => {
    let finalMessage = encodeURIComponent(tweetMessage);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <div className="App">
      <textarea placeholder="message" onChange={msgHandler}></textarea>
      <button className="btn-tags" type="button" onClick={tagHandler}>#webdev</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#JavaScript</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#ReactJS</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#codingisfun</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#teamtanay</button>
      <img src="twitter.svg" alt="Tweet" height='30' onClick={tweetHandler}/>
      <h3>Preview of your tweet</h3>
      <pre className="txt-output">{tweetMessage}</pre>
      <h4>{tweetSize}/280</h4>
    </div>
  );
}

export default App;
