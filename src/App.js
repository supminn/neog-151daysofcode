import {useState} from "react";
import './App.css';

//Calculate the number of days from 1st Jan 2021
let startDate = new Date("01/01/2021"); 
let todayDate = new Date();
let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
//Calculating maxDate
// var dd = todayDate.getDate();
// var mm = todayDate.getMonth()+1;
//  if(dd<10){
//         dd='0'+dd
//     } 
//     if(mm<10){
//         mm='0'+mm
//     } 
// let maxDate = todayDate.getFullYear()+'-'+mm+'-'+dd;

function App() {
  const [tweetMessage, tweetMsgHandler] = useState(`Day ${diffInDays} of #151daysofcode \n`);
  const [tweetTag, tweetTagHandler] = useState('\n#neogcamp');
  const [tweetSize, tweetSizeHandler] = useState(25);

  // const startDateHandler = (event) =>{
  //   console.log(event.target.value);
  //   startDate = new Date(event.target.value);
  //   diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  //   tweetMsgHandler(`Day ${diffInDays} of #151daysofcode`);
  // }

  const msgHandler = (event) => {
    let msgTweet = `Day ${diffInDays} of #151daysofcode \n`;
    msgTweet += `${event.target.value}`;
    tweetSizeHandler(msgTweet.length);
    tweetMsgHandler(msgTweet);
  }

  const tagHandler = (event) => {
    let msgTag = tweetTag;
    if(!msgTag.includes(event.target.innerText)){
      msgTag += ` ${event.target.innerText}`;
    }
    tweetSizeHandler(msgTag.length);
    tweetTagHandler(msgTag);
  }
  
  const tweetHandler = () => {
    let finalMessage = encodeURIComponent(tweetMessage+tweetTag);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <div className="App">
      <h2>Tweet your daily progress of #151daysofcode challenge</h2>
      <div className="data-section">
        {/* <div>
      Start date: <input type='date' value="2021-01-01" onChange={startDateHandler} min="2021-01-01" max={maxDate}></input>
      </div> */}
      <br/>
      <textarea className="txt-tweet" placeholder="Enter the tweet message here" onChange={msgHandler}></textarea>
      <br/>
      <div className='btn-section'>
      <button className="btn-tag" type="button" onClick={tagHandler}>#webdev</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#JavaScript</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#ReactJS</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#codingisfun</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#100daysofcode</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#dailycoding</button>
      <button className="btn-tag" type="button" onClick={tagHandler}>#teamtanay</button>
      </div>
      <br/>
      <span className="btn-tweet" onClick={tweetHandler}>Tweet <img src="twitter.svg" alt="Tweet"/></span>
      <br/><br/>
      <div className="data-section">
      <h3>⬇ Preview of your tweet ⬇</h3>
      <pre className="txt-output">{tweetMessage}</pre>
      <p>{tweetTag}</p>
      <h4 className="limit-tweet">{tweetSize}/280</h4>
      </div>
      <br/>
      </div>
    </div>
  );
}

export default App;
