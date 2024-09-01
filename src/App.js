import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import "./App.css"; // Add styles here or use a CSS file

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <h3 className="add-speaker-header">Add speaker</h3>
      <button onClick={toggleSidebar} className="add-speaker-btn">
        Add Speaker
      </button>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </div>
  );
};

export default App;
