import React, { useState } from "react";
import SpeakerList from "./SpeakerList";
import "./Sidebar.css"; // Add styles here or use a CSS file
import closeIcon from "../assest/close.png";
import searchIcon from "../assest/search.png";
const speakers = [
  {
    id: 1,
    name: "Eleanor Pena",
    designation: "President Of Sales",
    company: "XYZ Organisation",
  },
  {
    id: 2,
    name: "Esther Howard",
    designation: "Marketing Coordinator",
    company: "XYZ Organisation",
  },
  {
    id: 3,
    name: "Albert Flores",
    designation: "Nursing Assistant",
    company: "XYZ Organisation",
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    designation: "Web Designer",
    company: "XYZ Organisation",
  },
  {
    id: 5,
    name: "Shital Karhale",
    designation: "Full Stack Developer",
    company: "XYZ Organisation",
  },
  // Add more speakers here
];

const Sidebar = ({ onClose }) => {
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectSpeaker = (speaker) => {
    if (selectedSpeakers.includes(speaker)) {
      setSelectedSpeakers(selectedSpeakers.filter((s) => s !== speaker));
    } else {
      setSelectedSpeakers([...selectedSpeakers, speaker]);
    }
  };

  const filteredSpeakers = speakers.filter((speaker) =>
    speaker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Add Speaker</h2>
        <img
          onClick={onClose}
          src={closeIcon}
          className="close-btn"
          alt="Close btn"
        />
      </div>
      <div className="search-box">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <SpeakerList
        speakers={filteredSpeakers}
        selectedSpeakers={selectedSpeakers}
        onSelectSpeaker={handleSelectSpeaker}
      />
      <div className="sidebar-footer">
        <button className="save-btn" disabled={selectedSpeakers.length === 0}>
          Add
        </button>
        <button className="cancel-btn">Cancel</button>
        <span className="create-speaker">Create a speaker</span>
      </div>
    </div>
  );
};

export default Sidebar;
