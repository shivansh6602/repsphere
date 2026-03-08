import React from "react";
import Pagination from "@mui/material/Pagination";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "109px" } }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.length === 0 ? (
          <Typography
            variant="h6"
            textAlign="center"
            width="100%"
          >
            🔍 Search for exercises above
          </Typography>
        ) : (
          exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))
        )}
      </Stack>
      <Stack
        sx={{ mt: { lg: "114px", xs: "70px" } }}
        alignItems="center"
      ></Stack>
    </Box>
  );
};

export default Exercises;
