import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExcersises from "../components/SearchExcersises";
import Excersises from "../components/Excersises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner />
      <SearchExcersises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excersises 
       setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
    </Box>
  );
};

export default Home;
