import React, { useState } from 'react';

function App() {
    // adding state here.
  const [info, setInfo] = useState();
  
  const handleClick = (value) => {
    // code here.
    setInfo(value);
  };

  return (
    <div>
      {/* can setInfo directly on button */}
      <button onClick={() => handleClick('Fullname')}>Fullname</button>
      <button onClick={() => handleClick('Age')}>Age</button>
      <button onClick={() => handleClick('Picture')}>Picture</button>
      <DisplayInfo change = {info}/>
    </div>
  );
}

function DisplayInfo({change}) {
  let display;
  if (change === 'Fullname') {
    display = <h2>John Doe</h2>;
  } else if (change === 'Age') {
    display = <h2>30</h2>;
  } else if (change === 'Picture') {
    display = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    display = <p>Please select an option.</p>;
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default App;
