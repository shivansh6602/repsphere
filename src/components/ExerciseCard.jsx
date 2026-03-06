import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import image from "../assets/images/gym.jpg";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
  sx={{
    width: { lg: "300px", xs: "260px" },
    height: "380px", 
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 25px rgba(255,38,37,0.15)",
      border: "1px solid #FF2625",
    },
  }}
>

       
        <Box
          sx={{
            width: "100%",
            height: "140px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={image}
            alt="exercise"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
             
              transform: "scale(1.1)",
            }}
          />
        </Box>

       <Box
  sx={{
    p: 3,
    flex: 1, 
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>

         
          <Box
            sx={{
              width: "40px",
              height: "4px",
              backgroundColor: "#FF2625",
              borderRadius: "10px",
              mb: 2,
            }}
          />

          
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{
              textTransform: "capitalize",
              color: "#111",
              mb: 2,
            }}
          >
            {exercise.name}
          </Typography>

         
          <Stack spacing={1}>
            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#FF2625" }}>Body Part:</strong>{" "}
              {exercise.bodyPart}
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#FF2625" }}>Target:</strong>{" "}
              {exercise.target}
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#666" }}>
              <strong style={{ color: "#FF2625" }}>Equipment:</strong>{" "}
              {exercise.equipment}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default ExerciseCard;