import React from "react";
import Quote from "./components/Quote";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>Heyo</header>
      <Quote
        text="This is my quote. This is my quote. This is my quote. This is my quote. This is my quote. This is my quote. This is my quote. This is my quote."
        author="me"
      />
    </div>
  );
}

export default App;
