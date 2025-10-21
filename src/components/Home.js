import React, { useState, useEffect, useRef } from "react";
import BirthdayMessage from "./BirthdayMessage";
import mainImage from "../assets/photos/main_first.jpeg";

const Home = ({ onPinSuccess, onViewCard }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [currentHeart, setCurrentHeart] = useState("💖");
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [showSecret, setShowSecret] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const pinContainerRef = useRef(null);
  const pinFormRef = useRef(null);

  const romanticMessages = [
    "Every heartbeat of mine whispers your name... 💓",
    "In your eyes, I found my forever home... 🏡",
    "You are the melody that makes my soul dance... 🎶",
    "My love for you grows stronger with every sunrise... 🌅",
    "You are the dream I never want to wake up from... 💫",
  ];

  // Typing effect for romantic messages
  useEffect(() => {
    if (textIndex < romanticMessages.length) {
      const currentMessage = romanticMessages[textIndex];
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex <= currentMessage.length) {
          setTypingText(currentMessage.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % romanticMessages.length);
            setTypingText("");
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [textIndex]);

  // Floating hearts animation
  useEffect(() => {
    const hearts = ["💖", "💕", "💝", "💘", "💓", "💗", "💞", "🌸", "🌺", "🌷"];
    const interval = setInterval(() => {
      setCurrentHeart(hearts[Math.floor(Math.random() * hearts.length)]);
    }, 800);

    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        emoji: hearts[Math.floor(Math.random() * hearts.length)],
        left: Math.random() * 100,
        size: Math.random() * 25 + 15,
        duration: Math.random() * 4 + 3,
      };
      setFloatingHearts((prev) => [...prev.slice(-20), newHeart]);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(heartInterval);
    };
  }, []);

  // PIN submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (pin === "220923") {
      setError("");
      if (pinContainerRef.current) {
        pinContainerRef.current.classList.add("success-animation");
      }
      setTimeout(() => {
        onPinSuccess();
      }, 1500);
    } else {
      setError("Incorrect PIN.To check Hidden story enter the perfect code 💔");
      if (pinFormRef.current) {
        pinFormRef.current.classList.add("shake-animation");
        setTimeout(() => {
          pinFormRef.current.classList.remove("shake-animation");
        }, 500);
      }
    }
  };

  const revealSecret = () => {
    setShowSecret(true);
  };

  return (
    <div className="emotional-home-container">
      {/* Floating Hearts */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Main Content */}
      <div className="emotional-content">
        {/* Picture Section */}
        <div
          className="bestfriend-picture-section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Photo */}
          <img
            src={mainImage}
            alt="Special Moment"
            className="bestfriend-photo"
            style={{
              width: "300px",
              maxWidth: "90%",
              height: "auto",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />

          {/* Text Next to Photo */}
          <div
            className="photo-text"
            style={{ maxWidth: "400px", textAlign: "left" }}
          >
            <h2>Hey Boo! 🌸</h2>
            <p>
              Every moment with you is a memory I cherish. From laughs that
              never end to the little secrets we share, you make every day
              brighter and full of joy 🌟
            </p>
            <p>Here’s to many more adventures and giggles together! 💛💞</p>
          </div>
        </div>

        {/* Emotional Text Section */}
        <BirthdayMessage />

        {/* Secret PIN Section */}
        <div className="secret-section">
          {!showSecret ? (
            <button className="reveal-secret-btn" onClick={revealSecret}>
              🌈 Step Into the World of Smiles 🌼
            </button>
          ) : (
            <div className="pin-container-reveal" ref={pinContainerRef}>
              <h2>🌸 Where Moments Turn Into Memories🌸</h2>
              <p className="pin-instruction">
                Where laughter lives, memories bloom, and friendship feels like
                sunshine ☀️
              </p>

              <form
                onSubmit={handleSubmit}
                className="pin-form"
                ref={pinFormRef}
              >
                <input
                  type="password"
                  className="emotional-pin-input"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter the Secret Code"
                  maxLength="6"
                />
                <button type="submit" className="emotional-submit-btn">
                  💫 Open the Door to Our Cherished Memories💫
                </button>
              </form>

              {error && <p className="error-message">{error}</p>}

              <button onClick={onViewCard} className="emotional-card-btn">
                💌 Let My Words Celebrate You...
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="friendly-footer">
          <div className="footer-hearts">💖 🌸 💕 🌼 💛 🌷 💫</div>
          <p>Crafted with endless care, laughter, and beautiful memories 💫</p>
          <p>For the Person who makes every day brighter 🌈</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
