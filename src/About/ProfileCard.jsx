// ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, email, image }) => {
  const emailSubject = "Interview Opportunity";
  const emailBody = `Hi ${name},

We at [companyName] enjoyed your resume and would like to schedule an interview on [timeFrame].

Thank you!`;
  
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="profile-card">
      <div className="profile-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="about-contact">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
        </p>
        <p><strong>Location:</strong> Columbus, Ohio</p>
      </div>
    </div>
  );
};

export default ProfileCard;