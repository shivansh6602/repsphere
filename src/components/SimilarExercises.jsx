import React from "react";
import { Box, Typography } from "@mui/material";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

  return (
    <Box sx={{ mt: 10 }}>

      <Typography variant="h4" mb={3}>
        Similar Target Muscle Exercises
      </Typography>

      {targetMuscleExercises?.slice(0,5).map((exercise) => (
        <Typography key={exercise.id}>
          {exercise.name}
        </Typography>
      ))}

      <Typography variant="h4" mt={6} mb={3}>
        Similar Equipment Exercises
      </Typography>

      {equipmentExercises?.slice(0,5).map((exercise) => (
        <Typography key={exercise.id}>
          {exercise.name}
        </Typography>
      ))}

    </Box>
  );
};

export default SimilarExercises;