import './App.scss';
import { useState } from 'react';
import { quotes } from './quotes';

function App() {
  const [count, setCount] = useState(0);
  const [currentQuote] = useState(quotes);
  const colors = ["red", "orange", "violet", "green", "yellow", "blue", "brown"];

  const changeItem = () => {
    if (count >= 6) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div className={`App ${colors[count]}`}>

      <div id="quote-box">
        <figure>
          <blockquote >
            <p id="text">"{currentQuote[count].quote}"</p>
          </blockquote>
          <figcaption id="author">- {currentQuote[count].author}</figcaption>
        </figure>
        <button id="new-quote" className={`${colors[count]}`} onClick={changeItem}>New quote</button>
      </div>
    </div>
  );
}

export default App;
