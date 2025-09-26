import { useState, useEffect } from "react";

function App() {
  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0,
    Cpp: 0,
  });

  // Function to handle manual vote
  const vote = (language) => {
    setVotes((prev) => ({
      ...prev,
      [language]: prev[language] + 1,
    }));
  };

  // Function to update UI when votes change
  const updateVotes = () => {
    return Object.entries(votes).map(([lang, count]) => (
      <p key={lang}>
        {lang}: <span>{count}</span>
      </p>
    ));
  };

  // Simulate random votes every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      const langs = Object.keys(votes);
      const randomLang = langs[Math.floor(Math.random() * langs.length)];
      setVotes((prev) => ({
        ...prev,
        [randomLang]: prev[randomLang] + 1,
      }));
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, [votes]);

  return (
    <div className="poll-container">
      <h2>📊 Vote Your Favorite Language</h2>
      <div className="buttons">
        {Object.keys(votes).map((lang) => (
          <button key={lang} onClick={() => vote(lang)}>
            Vote {lang}
          </button>
        ))}
      </div>

      <h3>Results:</h3>
      <div className="results">{updateVotes()}</div>
    </div>
  );
}

export default App;
