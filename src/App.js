import {useState} from "react";
import './App.css';

  //Calculate the number of days from 1st Jan 2021
  let startDate = new Date("01/01/2021"); 
  let todayDate = new Date();
  let diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  //Calculating maxDate
  var dd = todayDate.getDate();
  var mm = todayDate.getMonth()+1;
  if(dd<10){
          dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  let maxDate = todayDate.getFullYear()+'-'+mm+'-'+dd;

function App() {
  const [tweetMessage, tweetMsgHandler] = useState(`Day ${diffInDays} of #151daysofcode\n`);
  const [tweetTag, tweetTagHandler] = useState('\n#neogcamp');
  const [tweetSize, tweetSizeHandler] = useState(35);
  const [dateValue, dateValueHandler] = useState("2021-01-01");
  
  const dateHandler =  (event) =>{
    let value = event.target.value;
    dateValueHandler(value);
    startDate = new Date(value);
    diffInDays = Math.ceil((todayDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    let changeDateText = {target:{value:""}};
    msgHandler(changeDateText);
  }

  const msgHandler = (event) => {
    let msgTweet = `Day ${diffInDays} of #151daysofcode \n`;
    msgTweet += `${event.target.value}`;
    tweetMsgHandler(msgTweet);
    tweetSizeHandler(msgTweet.length+tweetTag.length);
  }

  const tagHandler = (event) => {
    let msgTag = tweetTag;
    if(!msgTag.includes(event.target.innerText)){
      msgTag += ` ${event.target.innerText}`;
    }
    tweetTagHandler(msgTag);
    tweetSizeHandler(tweetMessage.length+msgTag.length);
  }
  
  const sendTweet = () => {
    let finalMessage = encodeURIComponent(tweetMessage+tweetTag);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    <div className="App">
      <h2>Tweet your daily progress on #151daysofcode challenge</h2>
      <div className="data-section">
        <div>
        Start date: <input className="inpt-startDate" type='date' value={dateValue} onChange={dateHandler} min="2021-01-01" max={maxDate}></input>
        </div>
        <br/>
        <textarea className="txt-tweet" placeholder="Enter the tweet message here" onChange={msgHandler}></textarea>
        <br/>
          <div className='btn-section'>
            <button className="btn-tag" type="button" onClick={tagHandler}>#webdev</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#JavaScript</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#ReactJS</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#MERN</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#FullStackDeveloper</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#codingisfun</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#100daysofcode</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#dailycoding</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#teamtanay</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#CSS</button>
            <button className="btn-tag" type="button" onClick={tagHandler}>#webdesign</button>
          </div>
          <br/>
          <div className="data-section">
          <h3>⬇ Preview of your tweet ⬇</h3>
          <pre className="txt-output">{tweetMessage}</pre>
          <p>{tweetTag}</p>
          <h4 className={tweetSize<=280?"limit-tweet":"limit-exceed"}>{tweetSize}/280</h4>
        </div>      
        <br/>
        <span className="btn-tweet" onClick={sendTweet}>Tweet <img src="twitter.svg" alt="Tweet"/></span>
        <br/>
      </div>
      <footer>
        <p>This app currently tracks the calendar day number starting from 1st Jan 2021. Safely assuming that I would not take break days, 1st June 2021 would be 151 days from then.</p>
        <p>Visit <a href="https://151daysofcode.netlify.app/" target="_blank" rel="noreferrer">#151daysofcode</a> to understand all about this challenge and get started!
        </p>
        <p>
        <span>
            <a href="https://supminn-neog.netlify.app/" target="_blank" rel="noreferrer"><img className="social-media" src="user.svg"
                    width="30" alt="Portfolio"></img></a>
            <a href="https://github.com/supminn/" target="_blank" rel="noreferrer"><img className="social-media" src="github.svg"
                    width="30" alt="Github"></img></a>
            <a href="https://twitter.com/supminn" target="_blank" rel="noreferrer"><img className="social-media" src="twitter.svg"
                    width="30" alt="Twitter"></img></a>
        </span>
        &nbsp;Copyright © 2020 SupTECH </p>
      </footer>
    </div>
  );
}

export default App;
