import { render } from 'enzyme';
import React, { useState } from 'react';
import './App.css';

function App () {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  };

  render(); {
    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={handleClick}>Incrementa</button>
      </div>
    )
  }
}

export default App;
