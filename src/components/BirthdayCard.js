import React from "react";
import "./BirthdayCard.css";
import bhoothImage from "../assets/photos/booth.jpeg";

const BirthdayCard = ({ onBack }) => {
  return (
    <div className="card-container">
      <div
        className="birthday-card"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="heart-animation">💝</div>

        <h1 className="card-title">To My Dearest Person 💕</h1>

        {/* Flex container for image + message */}
        <div
          className="card-content-flex"
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            background: "linear-gradient(135deg, #ffb6c1, #ffc0cb)", // soft romantic pink
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(255,105,180,0.4)",
            color: "#fff",
          }}
        >
          {/* Left: Image */}
          <div
            style={{
              flex: "1 1 250px",
              minWidth: "250px",
              textAlign: "center",
            }}
          >
            <img
              src={bhoothImage}
              alt="Special Memory"
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "15px",
                boxShadow: "0 5px 20px rgba(255,182,193,0.6)",
              }}
            />
          </div>

          {/* Right: Messages */}
          <div style={{ flex: "2 1 450px", minWidth: "300px" }}>
            <div className="card-message">
              <p>
                On this special day, I want you to know how incredibly precious
                you are to me. Every moment with you feels like a beautiful
                dream I never want to wake up from. 💫
              </p>
              <p className="romantic-quote">
                "In your smile, I see something more beautiful than the stars."
                ✨
              </p>
              <p>
                You're not just my best friend; you're my soulmate, my
                confidant, and the reason my heart beats faster. Your laughter
                is my favorite melody, and your happiness means everything to
                me. 🎶
              </p>
              <p>
                I cherish every memory we've created together and look forward
                to countless more. You make my world brighter just by being in
                it. 🌟
              </p>
              <p className="romantic-quote">
                "I love you not only for what you are, but for what I am when
                I'm with you." 💖
              </p>
              <p>
                Happy Birthday to the most amazing person in my life. May this
                year bring you all the joy, love, and happiness you deserve.
                You're my everything. 💕
              </p>

              <p>
                Thank you for always being with me, for guiding me, and for
                helping me become a better person. Thank you for controlling my
                anger, showing me the right way, and correcting me for every
                silly thing I do. I know I can be difficult and make a lot of
                messes, but I will always love you the most. 💓
              </p>
              <p>
                If possible, please forgive me, and as I always say, I want you
                to smile as always — you look even more beautiful when you do.
                🌸✨
              </p>

              <p>
                I hope and pray that soon you find a new company that truly
                appreciates your talent and hard work. I can picture you happily
                living in your own flat, with your adorable pug by your side.
                🏡🐾
              </p>
              <p>
                I know you've been going through a tough time after your
                breakup, but remember that healing takes time, and brighter days
                are waiting for you. 💖 Each day brings you closer to the
                happiness you deserve, and I’ll always be cheering for you from
                the sidelines.
              </p>
              <p>
                Keep believing in yourself, take things one step at a time, and
                trust that joy and love are on their way to you. 🌈✨
              </p>

              <p className="signature">
                <br />
                Your Secret Admirer - Guddu💘
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onBack}
          className="back-btn"
          style={{ marginTop: "20px" }}
        >
          Back to Home 🏠
        </button>
      </div>
    </div>
  );
};

export default BirthdayCard;
