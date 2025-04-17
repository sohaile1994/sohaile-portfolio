import React, { useState, useEffect } from "react";

const SkillPreview = ({ skill, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 600); // Check for mobile screen size
    };
    checkIfMobile(); // Initial check
    window.addEventListener("resize", checkIfMobile); // Update on window resize

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (!skill) return null;

  const renderYouTubeEmbed = () => {
    const videoId = getYouTubeVideoId(skill.youtubeLink);
    return (
      <iframe
        width="100%"
        height="315px"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={skill.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  const renderYouTubeLink = () => {
    return (
      <a href={skill.youtubeLink} target="_blank" rel="noopener noreferrer">
        Watch on YouTube
      </a>
    );
  };

  return (
    <div className="skill-modal-overlay" onClick={onClose}>
      <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
        <div className="youtube-link">
          {isMobile ? renderYouTubeLink() : renderYouTubeEmbed()}
        </div>
      </div>
    </div>
  );
};

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\?v=|(?:v|e(?:mbed)?)\/|\S+)([a-zA-Z0-9_-]{11}))/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default SkillPreview;
