import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Update time every 1 second
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>👋 Welcome to Charusat!!!!!!</h1>
      <h2>
        Current Date & Time: <br />
        {dateTime.toLocaleString()}
      </h2>
    </div>
  );
}

export default App;
