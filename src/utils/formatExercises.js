export const formatExercises = (data) => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    bodyPart: item.primaryMuscles?.[0] || "unknown",
    target: item.primaryMuscles?.[0] || "unknown",
    equipment: item.equipment || "bodyweight",
    
    gifUrl: `https://v2.exercisedb.io/image/${item.id}.gif`,
  }));
};