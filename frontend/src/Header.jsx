import Box from "@mui/material/Box";
import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import "./index.css";

const Header = () => {
  return (
    <Box className="header-container">
      <NotesIcon fontSize="large" className="header-icon" />
      &nbsp;&nbsp;
      <h1>Atrangi Notes</h1>
    </Box>
  );
};

export default Header;
