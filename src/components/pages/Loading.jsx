import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Loading.css";

function Loading() {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000; // total loading duration
    const intervalTime = 30; // interval for updating progress
    const increment = (100 / duration) * intervalTime;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setShowWelcome(true); // show welcome text
          // redirect to landing page after 1 second
          setTimeout(() => navigate("/landing"), 1000);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      {/* Top-left logo */}
      <a href="/landing" className="logo">
        sanjay.py
      </a>

      {/* Snake chasing ball */}
      <div className="chase-container">
        <div className="ball"></div>
        <div className="snake">
          <div className="snake-part"></div>
          <div className="snake-part"></div>
          <div className="snake-part"></div>
        </div>
      </div>

      {/* Moving background text */}
      <div className="moving-text-container">
        <div className="moving-text moving-text-black">
          {Array(6)
            .fill("PYTHON DEVELOPER •")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      {/* Main content */}
      <div className="loading-content">
        <div className="loading-card">
          <div className="text-container">
            {!showWelcome ? (
              <div className="loading-header">
                <h1 className="loading-title">LOADING</h1>
                <span className="loading-percentage-inline">
                  {Math.round(progress)}%
                </span>
              </div>
            ) : (
              <h1 className="welcome-message show">WELCOME</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
