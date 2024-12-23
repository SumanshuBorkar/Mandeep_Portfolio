import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")} style={{cursor:"pointer"}}>
        mandeep kumar, student in fashion school
      </div>
      <p onClick={() => navigate("/projects")} style={{cursor:"pointer"}}>who does STUFF</p>
      <p onClick={() => navigate("/about")} style={{cursor:"pointer"}}>about</p>
    </div>
  );
};

export default Header;