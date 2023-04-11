import * as React from 'react';
import "./App.css";

function App() {
  // initializes count to the saved total click count and a setter function
  const [count, setCount] = React.useState(parseInt(localStorage.getItem("clicks")));

  // function to run when the button is clicked
  const handleClick = () => {

    // increments the total click count
    setCount(count + 1);

    // sets the total click count 
    localStorage.setItem("clicks", count);
  };

  // returns the html for the total click count and a button increment the count
  return (
    <div className="App">
      <div className="count">
        <p>Count: {parseInt(localStorage.getItem("clicks"))}</p>
      </div>
      <button class="click-button" type="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
