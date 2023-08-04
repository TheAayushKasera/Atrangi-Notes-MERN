import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css"; // Import the CSS file

const NoteDisplay = ({ notearr, deleteData }) => {
  return (
    <Grid
      container
      spacing={2}
      className="grid-container"
      sx={{
        marginTop: "5vh",
        width: "auto",
        marginLeft: "5vw",
        marginRight: "5vw",
      }}
    >
      {notearr.map((i, ind) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i._id}
            padding={0}
            className="grid-item"
            sx={{}}
          >
            <Paper
              className="note-paper"
              sx={{ borderRadius: "24px 24px 24px 24px" }}
              elevation={6}
            >
              <Typography
                variant="h4"
                className="note-title"
                sx={{ borderRadius: "24px 24px 0 0", fontWeight: "bold" }}
              >
                {i.title}
              </Typography>
              <Typography
                className="note-description"
                style={{ whiteSpace: "pre-line", padding: "5%" }}
              >
                {i.description}
              </Typography>
              <IconButton
                className="delete-button"
                fontSize="large"
                value={i._id}
                name={i._id}
                onClick={() => deleteData(i._id)}
              >
                <DeleteIcon color="primary" fontSize="medium" />
              </IconButton>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NoteDisplay;
