import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExcersises from "../components/SearchExcersises";
import Exercises from "../components/Exercises";
import rawExercises from "../data/exercises.json";
import { formatExercises } from "../utils/formatExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {

    const formattedData = formatExercises(rawExercises);

    if (bodyPart === "all") {
      setExercises(formattedData);
    } else {
      const filteredExercises = formattedData.filter(
        (item) => item.bodyPart === bodyPart
      );

      setExercises(filteredExercises);
    }

  }, [bodyPart]);

  return (
    <Box>
      <HeroBanner />

      <SearchExcersises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;