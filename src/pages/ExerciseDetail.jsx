import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {

const [exerciseDetail, setExerciseDetail] = useState({})
const [exerciseVideos, setExerciseVideos] = useState([])
const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
const [equipmentExercises, setEquipmentExercises] = useState([])

const { id } = useParams();
useEffect(() => {
  const fetchExercisesData = async () => {


 const exerciseDbURL = "https://exercisedb.p.rapidapi.com";


 const exerciseDetailData = await fetchData(
  `${exerciseDbURL}/exercises/exercise/${id}`,
  exerciseOptions
 );
setExerciseDetail(exerciseDetailData);


const youtubeSearchUrl = "https://www.googleapis.com/youtube/v3/search";

const youtubeVideosResponse = await fetch(
  `${youtubeSearchUrl}?part=snippet&q=${exerciseDetailData.name} exercise&type=video&maxResults=4&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
);

const youtubeVideosData = await youtubeVideosResponse.json();
setExerciseVideos(youtubeVideosData.items || []);


const targetMuscleExerciseData = await fetchData (
  `${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`,
  exerciseOptions
);
setTargetMuscleExercises(targetMuscleExerciseData)
  


const equipmentExerciseData = await fetchData(
  `${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`,
  exerciseOptions
)
setEquipmentExercises(equipmentExerciseData)

};
  

  fetchExercisesData()
}, [id]);

return (
<Box sx={{ mt: { lg: "96px", xs: "60px" } }}>

<Detail exerciseDetail={exerciseDetail}/>
<ExerciseVideos exerciseVideos={exerciseVideos}
name={exerciseDetail.name}
/>
<SimilarExercises  targetMuscleExercises={targetMuscleExercises}  
equipmentExercises={equipmentExercises}/>


</Box>

)
};

export default ExerciseDetail;