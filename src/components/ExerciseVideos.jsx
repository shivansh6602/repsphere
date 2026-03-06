import React from "react";
import { Box, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if (!exerciseVideos?.length) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        No exercise videos available
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 8 }}>

      <Typography variant="h4" mb={4}>
        Watch <span style={{ color: "#FF2625" }}>{name}</span> exercise videos
      </Typography>

      {exerciseVideos.map((video, index) => (
        <Box key={index}>
          <a
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Typography>{video.video.title}</Typography>
          </a>
        </Box>
      ))}

    </Box>
  );
};

export default ExerciseVideos;