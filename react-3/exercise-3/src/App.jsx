import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature,setTemperature] = useState(0);
  return (
    <div id="app">
      <Header temp ={temperature} />
      <Content tempContent ={temperature} />
      <Footer setTemp = {setTemperature} currentTemp = {temperature}/>
    </div>
  );
}

function Header({temp}) {
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temp}</p>
    </header>
  );
}

function Content({tempContent}) {
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature showTemp={tempContent} />
    </div>
  );
}

function Temperature({showTemp}) {
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{showTemp} Oc</span>
    </div>
  );
}

function Footer({currentTemp,setTemp}) {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={() => setTemp(currentTemp + 1)}>Up</button>
      <button onClick={() => setTemp(currentTemp - 1)}>Down</button>
    </footer>
  );
}

export default App;
