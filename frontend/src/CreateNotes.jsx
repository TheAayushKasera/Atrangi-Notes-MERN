import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import "./index.css"; // Import the CSS file

const CreateNotes = ({
  title,
  description,
  postdata,
  setTitle,
  setDescription,
}) => {
  return (
    <form onSubmit={postdata}>
      <Paper className="form-container" elevation={10}>
        <TextField
          className="input-title"
          label="Input Title"
          variant="standard"
          color="success"
          size="large"
          fontSize="large"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          className="input-notes"
          label="Input Notes"
          variant="standard"
          color="success"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          multiline
        />
        <span className="submit-button">
          <IconButton type="submit">
            <AddCircleIcon className="submit-icon" fontSize="large" />
          </IconButton>
        </span>
      </Paper>
    </form>
  );
};

export default CreateNotes;
