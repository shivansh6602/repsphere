import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import rawExercises from "../data/exercises.json";
import { formatExercises } from "../utils/formatExercises";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    const fetchExerciseData = async () => {

      const formattedData = formatExercises(rawExercises);

      const currentExercise = formattedData.find(
        (item) => item.id === id
      );

      setExerciseDetail(currentExercise);

      // 🔴 YouTube API call
      const youtubeSearchUrl = "https://www.googleapis.com/youtube/v3/search";

      const youtubeVideosResponse = await fetch(
        `${youtubeSearchUrl}?part=snippet&q=${currentExercise.name} exercise&type=video&maxResults=4&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const youtubeVideosData = await youtubeVideosResponse.json();

      setExerciseVideos(youtubeVideosData.items || []);

      // similar by target
      const targetExercises = formattedData.filter(
        (item) =>
          item.target === currentExercise.target &&
          item.id !== currentExercise.id
      );

      setTargetMuscleExercises(targetExercises);

      // similar by equipment
      const equipmentExercisesData = formattedData.filter(
        (item) =>
          item.equipment === currentExercise.equipment &&
          item.id !== currentExercise.id
      );

      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseData();

  }, [id]);

  return (

    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>

      <Detail exerciseDetail={exerciseDetail} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />

      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />

    </Box>

  );
};

export default ExerciseDetail;