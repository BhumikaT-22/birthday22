import React, { useState, useEffect, useRef } from "react";
import mainSong from "../assets/audio/meri-jaan-song.mp3";

// Import all start images
import start1 from "../assets/photos/start1.jpeg";
import start2 from "../assets/photos/start2.jpeg";
import start3 from "../assets/photos/start3.jpeg";
import start4 from "../assets/photos/start4.jpeg";
import start5 from "../assets/photos/start5.jpeg";
import start6 from "../assets/photos/start6.jpeg";
import start7 from "../assets/photos/start7.jpeg";
import start8 from "../assets/photos/start8.jpeg";
import start9 from "../assets/photos/start9.jpeg";
import start10 from "../assets/photos/start10.jpeg";
import start11 from "../assets/photos/start11.jpeg";
import start12 from "../assets/photos/start12.jpeg";
import start13 from "../assets/photos/start13.jpeg";
import start14 from "../assets/photos/start14.jpeg";
import start15 from "../assets/photos/start15.jpeg";
import togetherImage from "../assets/photos/together.jpeg";
const PhotoAlbum = ({ onBack }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  const startImages = [
    start1,
    start2,
    start3,
    start4,
    start5,
    start6,
    start7,
    start8,
    start9,
    start10,
    start11,
    start12,
    start13,
    start14,
    start15,
  ];

  const messages = [
    "Every moment with you is magical ✨",
    "Your smile makes my world glow 🌈",
    "In your eyes, I always find comfort 🏡",
    "You make every day feel special 💫",
    "My heart feels lighter whenever you're around 💓",
    "You are the spark that brightens my day 🌟",
    "With you, life feels like a beautiful story 🏰",
    "You make even cloudy days cheerful ☀️",
    "Every laugh with you is priceless 💖",
    "Side by side, we make the best memories 🌟",
    "Adventure and giggles, all thanks to you 🎉",
    "You are my partner in all fun and silly moments 😄",
    "Our memories together are my favorite treasures 💛",
    "Life shines brighter because of our bond 🌈",
    "Together, we create magic every day 💫",
  ];

  // Auto-play music when possible
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        console.log("Autoplay blocked until user interacts.");
      }
    };
    playAudio();
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight, firstChild } =
          containerRef.current;

        const photoHeight = firstChild?.offsetHeight + 20; // including margin
        const maxScroll = scrollHeight - clientHeight;

        if (scrollTop + photoHeight >= maxScroll) {
          containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          containerRef.current.scrollTo({
            top: scrollTop + photoHeight,
            behavior: "smooth",
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const photos = startImages.map((img, i) => ({
    id: i + 1,
    src: img,
    caption: messages[i], // left side comment/message
  }));

  return (
    <div className="album-container">
      <audio ref={audioRef} loop>
        <source src={mainSong} type="audio/mpeg" />
      </audio>

      <div
        className="music-control"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        <button
          onClick={togglePlay}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "15px",
            border: "none",
            cursor: "pointer",
            background: isPlaying
              ? "linear-gradient(90deg, #ff758c, #ff7eb3)"
              : "linear-gradient(90deg, #43cea2, #185a9d)",
            color: "#fff",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
      </div>

      <div className="photo-display" ref={containerRef}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-frame"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            {/* Left: Message */}
            <div style={{ flex: 1, paddingRight: "20px" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                {photo.caption}
              </p>
            </div>

            {/* Right: Photo */}
            <div style={{ flex: 1 }}>
              <img
                src={photo.src}
                alt={`Memory ${photo.id}`}
                style={{
                  width: "450px",
                  borderRadius: "15px",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>

            <img
              src={selectedPhoto.src}
              alt={`Memory ${selectedPhoto.id}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      )}
      {/* Personal Birthday Note Section */}
      <div
        className="personal-note-flex"
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          padding: "25px",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, rgba(255,105,180,0.8), rgba(255,182,193,0.8))",
          boxShadow: "0 0 25px rgba(255,105,180,0.7)",
          color: "#fff",
          flexWrap: "wrap", // responsive on smaller screens
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <p>
            🌸 Once again, my love, wishing you the happiest of birthdays! 🌸
          </p>

          <p>
            Thank you for being my light, my laughter, and my constant support.
            I know sometimes I may seem protective or over-caring, but from the
            day I first saw you, I felt it was my responsibility to shield you
            from every shadow. And I do it all with joy 💖
          </p>

          <p>
            Forgive me for the times I've hurt you—I may not be perfect, but
            your happiness has always been my deepest desire. These six years
            with you have been magical, and I want to keep seeing your beautiful
            smile every day 🌹
          </p>

          <p>
            I am not expecting anything more than your happiness. I wish that
            you find all the colors of joy in life, and till then, if possible,
            stay close to me. We still have countless memories to make—internal
            trips, laughter, and adventures. And after your marriage, I hope we
            four continue to celebrate life together, traveling and cherishing
            every moment 🎉
          </p>

          <p>
            I believe the old, wonderful Bhumika will return soon. Till then,
            let me be there for you in every way, to protect, support, and stand
            by your side. 🌈
          </p>

          <p>
            Once again, happy 23rd birthday, my darling! Sending you the biggest
            hug, endless love, and a heart full of wishes. 💞💫
          </p>
        </div>

        {/* Right: Image */}
        <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
          <img
            src={togetherImage}
            alt="Together Memories"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(255,182,193,0.6)",
            }}
          />
        </div>
      </div>

      <button className="back-btn" onClick={onBack}>
        🏡 Back
      </button>
    </div>
  );
};

export default PhotoAlbum;
