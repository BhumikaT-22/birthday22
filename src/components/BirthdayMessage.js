import React from "react";
import "./BirthdayMessage.css"; // <-- create this CSS file

const BirthdayMessage = ({ name = "NAME" }) => {
  return (
    <div className="birthday-message-container">
      {/* Left: Image */}
      <div className="birthday-photo-container">
        <img
          src="/images/bhumika.jpg"
          alt={`${name}'s portrait`}
          className="birthday-photo"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="photo-fallback-message">
          💖 You shine brighter than any picture could show 💫
        </div>
      </div>

      {/* Right: Message */}
      <div className="birthday-message-card">
        <ul className="birthday-message-list">
          <li>
            <strong>A singer</strong> would pour their heart into a song,
            letting every note carry their wish to you.
          </li>
          <li>
            <strong>A writer</strong> would craft words that dance with emotion,
            painting your spirit with joy.
          </li>
          <li>
            <strong>A painter</strong> would splash the canvas with colors of
            laughter, happiness, and dreams.
          </li>
          <li>
            <strong>A dancer</strong> would move with grace, each step
            celebrating the light you bring into the world.
          </li>
          <li>
            <strong>A musician</strong> would play melodies that echo the warmth
            of your smile and laughter.
          </li>
          <li>
            <strong>A poet</strong> would write verses that bloom like flowers,
            carrying the beauty of your soul.
          </li>
          <li>
            <strong>A photographer</strong> would capture moments where your
            happiness shines brighter than the sun.
          </li>
        </ul>

        <p className="birthday-role-line">
          And as a <strong>Software Engineer</strong> who builds beauty through
          pixels and code, weaving code into joy, painting the web with care and
          creativity, I thought I would wish you this way —
        </p>

        <div className="birthday-highlight">
          🎂 Happy Birthday Bassi!
          <br />
          May your life overflow with happiness, laughter, and magical moments
          that stay in your heart forever. 💖
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
