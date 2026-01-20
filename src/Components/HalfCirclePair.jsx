import { useRef, useState, useEffect } from "react";
import "./halfcirclepair.css";

function HalfCirclePair() {
  const tadaSoundRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [scatter, setScatter] = useState(true);

  const instructionText = "Click Anywhere To Reveal";
  const letters = instructionText.split("");

  useEffect(() => {
    // After 0.5s, bring letters back together
    const timer = setTimeout(() => setScatter(false), 500);
    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    if (revealed) return;
    setRevealed(true);

    // Play sound after 2.1s
    if (!tadaSoundRef.current) tadaSoundRef.current = new Audio("/sounds/tada.mp3");
    setTimeout(() => {
      tadaSoundRef.current.currentTime = 0;
      tadaSoundRef.current.play().catch(err => console.warn(err));
    }, 2100);

    // Trigger flash after 2s
    setTimeout(() => {
      const flashEl = document.querySelector(".flash");
      flashEl?.classList.add("flash-active");
      setTimeout(() => flashEl?.classList.remove("flash-active"), 200);
    }, 2000);
  }

  return (
    <div
      className={`half-circle-container ${revealed ? "revealed" : ""}`}
      onClick={handleClick}
    >
      <div className="half-circle half-circle-left">
        <img src="/TwoTurnTables.png" alt="Left" className="microphone" />
      </div>
      <div className="half-circle half-circle-right">
        <img src="/TwoTurnTables.png" alt="Right" className="person" />
      </div>

      <div className="flash"></div>

      {!revealed && (
        <p className="click-instruction">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={scatter ? "scatter" : "gather"}
              style={{ "--i": index }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default HalfCirclePair;
