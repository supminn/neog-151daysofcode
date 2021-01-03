import {useState} from "react";
import './App.css';

//Calculate the number of days from 1st Jan 2021
let startDate = new Date("01/01/2021"); 
let todayDate = new Date();
let diffInDays = Math.floor((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

const tagHandler = (event) => {
  console.log(event.target.innerText);
}

const tweetHandler = () => {
  console.log("inside tweetHandler");
  // let finalMessage = encodeURIComponent(msgTweet);
  // let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
  // window.open(twitterUrl, "_blank");
}

function App() {
  const [tweetMessage, tweetMsgHandler] = useState(`Day ${diffInDays} of #151daysofcode`);

  const msgHandler = (event) => {
  let msgTweet = `Day ${diffInDays} of #151daysofcode \n`;
  msgTweet += `${event.target.value}`;
  console.log(msgTweet);
  tweetMsgHandler(msgTweet);
}

  return (
    <div className="App">
      <textarea placeholder="message" onChange={msgHandler}></textarea>
      <button className="btn-tags" type="button" onClick={tagHandler}>#webdev</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#javascript</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#react</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#codingisfun</button>
      <button className="btn-tags" type="button" onClick={tagHandler}>#codedaily</button>
      <img src="twitter.svg" alt="Tweet" height='30' onClick={tweetHandler}/>
      <h3>Preview of your tweet</h3>
      <div className="txt-output">{tweetMessage}</div>
    </div>
  );
}

export default App;
