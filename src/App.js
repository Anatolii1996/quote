import './App.scss';
import { useState, useEffect } from 'react';
import { quotes } from './quotes';

import { FaTwitterSquare } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes[count]);
  const colors = ["red", "orange", "violet", "green", "yellow", "blue", "brown"];

  const changeItem = () => {
    if (count >= 6) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  };

  useEffect(() => {
    setCurrentQuote(quotes[count])
  }, [count, currentQuote])


  return (
    <div className={`App ${colors[count]} transition`}>

      <div id="quote-box" >
        <figure>
          <blockquote >
            <p id="text" className='animate'>"{currentQuote.quote}"</p>
          </blockquote>
          <figcaption id="author" className='animate'>- {currentQuote.author}</figcaption>
        </figure>
        <div className="footer_wrap">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
            <FaTwitterSquare className="tweet_icon" />
          </a>

          <button id="new-quote" className={`${colors[count]} transition`} onClick={changeItem}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
