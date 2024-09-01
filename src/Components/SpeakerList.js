import React from "react";
import "./SpeakerList.css";
import Avatar from "../assest/Avatar.png";
import editIcon from "../assest/edit.png";

const SpeakerList = ({ speakers, selectedSpeakers, onSelectSpeaker }) => {
  return (
    <div className="speaker-list">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className={`speaker-item ${
            selectedSpeakers.includes(speaker) ? "selected" : ""
          }`}
        >
          <div className="speaker-info-container">
            <div className="speaker-info">
              <img src={Avatar} alt={speaker.name} className="speaker-avatar" />
              <span className="speaker-name">{speaker.name}</span>
              <input
                type="checkbox"
                checked={selectedSpeakers.includes(speaker)}
                onChange={() => onSelectSpeaker(speaker)}
                className="speaker-checkbox"
              />
            </div>
            <div className="speaker-details">
              <p>
                {speaker.designation} | {speaker.company}
              </p>
            </div>
            <div className="edit-speaker">
              <img src={editIcon} alt="Edit" className="edit-icon" />
              <a href="#" className="edit-link">
                Edit Speaker
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakerList;
