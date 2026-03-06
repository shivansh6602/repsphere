import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

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

setExerciseVideos([]);
// //ExerciseVideos
// const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
// const exerciseVideosData = await fetchData(
//   `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
//   youtubeOptions
// );
// console.log("Exercise Detail:", exerciseDetailData);
// console.log("Videos:", exerciseVideosData);

// setExerciseVideos(exerciseVideosData.contents);

//ExerciseData
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
console.log("Exercise Detail:", exerciseDetailData);
console.log("Target Exercises:", targetMuscleExerciseData);
console.log("Equipment Exercises:", equipmentExerciseData);
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