import React, { useState, useEffect } from "react";

export default function MailboxAnimation() {
  const [flagUp, setFlagUp] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [mailOut, setMailOut] = useState(false);
  const [mailVisible, setMailVisible] = useState(false);

  useEffect(() => {
    function startCycle() {
      setFlagUp(false);
      setDoorOpen(false);
      setMailOut(false);
      setMailVisible(false);

      setTimeout(() => setFlagUp(true), 500); // Raise flag
      setTimeout(() => setDoorOpen(true), 1800); // Open door
      setTimeout(() => {
        setMailOut(true);
        setMailVisible(true);
      }, 3000); // Mail slides out and appears
      setTimeout(() => setMailVisible(false), 4500); // Mail fades out
      setTimeout(() => setDoorOpen(false), 5800); // Door closes
      setTimeout(() => setFlagUp(false), 7200); // Flag lowers
    }

    startCycle(); // Start immediately

    const interval = setInterval(() => {
      startCycle();
    }, 10000); // Repeat every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const postStyle = {
    width: 20,
    height: 150,
    backgroundColor: "#6b4226",
    margin: "0 auto",
  };

  const mailboxStyle = {
    position: "relative",
    width: 180,
    height: 100,
    backgroundColor: "black",
    borderRadius: "20px",
    margin: "0 auto",
    perspective: 600,
    overflow: "visible",
    zIndex: 1,
  };

  const flagContainerStyle = {
    position: "absolute",
    bottom: 70,
    left: 110,
    width: 40,
    height: 70,
    transformOrigin: "bottom center",
    transform: flagUp ? "rotate(0deg)" : "rotate(90deg)",
    transition: "transform 1s ease-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 5,
  };

  const flagStemStyle = {
    width: 6,
    height: 50,
    backgroundColor: "red",
    borderRadius: 2,
    position: "relative",
  };

  const flagStyle = {
    position: "absolute",
    top: 0,
    left: "100%",
    width: 40,
    height: 20,
    backgroundColor: "red",
    borderRadius: "4px",
  };

  const doorStyle = {
    position: "absolute",
    left: 10,
    top: 70,
    width: 80,
    height: 20,
    backgroundColor: "black",
    borderRadius: "15px 15px 15px 0",
    transformOrigin: "left bottom",
    transform: doorOpen ? "rotate(180deg)" : "rotate(270deg)",
    transition: "transform 1s ease-in-out",
    zIndex: 4,
    boxShadow: "inset 0 0 8px rgba(255,255,255,0.1)",
  };

  const mailStyle = {
    position: "absolute",
    width: 60,
    height: 30,
    backgroundColor: "gray",
    top: 40,
    left: mailOut ? -60 : 10,
    borderRadius: 5,
    opacity: mailVisible ? 1 : 0,
    transition: "left 1s ease-in-out, opacity 1s ease-in-out",
    zIndex: 3,
  };

  const logoUrl =  process.env.PUBLIC_URL + "/TwoTurnTables.png";
  
  const logoStyle = {
    position: "absolute",
    top: 20,
    left: 60,
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: "2px solid white",
    zIndex: 6,
    objectFit: "cover",
    backgroundColor: "white",
  };

  return (
    <div style={{ width: 220, margin: "50px auto" }}>
      <div style={mailboxStyle}>
         <img src={logoUrl} alt="Logo" style={logoStyle} />

        <div style={flagContainerStyle}>
          <div style={flagStemStyle}>
            <div style={flagStyle} />
          </div>
        </div>

        <div style={doorStyle} />

        <div style={mailStyle} />
      </div>

      <div style={postStyle} />
    </div>
  );
}
