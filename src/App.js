import './App.scss';
import { useState } from 'react';
import { quotes } from './quotes';

function App() {
  const [colorCount, setColorCount] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes);
  const colors = ["red", "orange", "violet", "green", "yellow", "blue", "brown"];

  const changeColor = () => {
    if (colorCount > 6) {
      setColorCount(0)
    } else {
      setColorCount(colorCount + 1)
    }
  }

  return (
    <div className={`App ${colors[colorCount]}`}>

      <div id="quote-box">
        <figure>
          <blockquote >
            <p id="text"></p>
          </blockquote>
          <figcaption id="author"></figcaption>
        </figure>
        <button id="new-quote" className={`${colors[colorCount]}`} onClick={changeColor}>New quote</button>
      </div>
    </div>
  );
}

export default App;
