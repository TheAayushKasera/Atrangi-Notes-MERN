import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import "./index.css";

const link = "https://www.linkedin.com/in/aayush-kasera";

const Footer = () => {
  const open = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <Box className="footer-container">
      <Link
        href="#"
        target="_blank"
        onClick={open}
        variant="h6"
        className="footer-link"
      >
        @theAayushKasera
      </Link>
    </Box>
  );
};

export default Footer;
